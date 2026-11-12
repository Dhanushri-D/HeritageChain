import React, { useState, useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { Network, Filter, Info, RotateCcw, Layers, Maximize2 } from 'lucide-react';

export const KnowledgeGraph = ({ relationships, artifactName = 'Heritage Knowledge Network' }) => {
  const [selectedNode, setSelectedNode] = useState(null);
  const [filterType, setFilterType] = useState('all');
  const [rfInstance, setRfInstance] = useState(null);

  const filterTypes = useMemo(() => {
    const types = new Set();
    (relationships?.nodes || []).forEach((n) => {
      if (n.id !== 'root' && n.type) types.add(n.type);
    });
    return ['all', ...Array.from(types)];
  }, [relationships]);

  const generateInitialFlowData = useCallback(() => {
    if (!relationships || !relationships.nodes || relationships.nodes.length === 0) {
      return { initialNodes: [], initialEdges: [] };
    }

    const totalNodes = relationships.nodes.length;
    const radius = 220;

    const initialNodes = relationships.nodes.map((node, index) => {
      const isRoot = node.id === 'root';
      let x = 350;
      let y = 250;

      if (!isRoot && totalNodes > 1) {
        const angle = ((index - 1) / (totalNodes - 1)) * 2 * Math.PI;
        x = 350 + radius * Math.cos(angle);
        y = 250 + radius * Math.sin(angle);
      }

      const bg = isRoot ? '#12212E' : node.color || '#307082';
      const isLightBg = bg.toUpperCase() === '#ECE7DC';

      return {
        id: node.id,
        data: { label: node.label, type: node.type, raw: node },
        position: { x, y },
        style: {
          background: bg,
          color: isLightBg ? '#12212E' : '#FFFFFF',
          border: isRoot ? '3px solid #EA9940' : '1.5px solid #6CA3A2',
          borderRadius: isRoot ? '14px' : '10px',
          padding: isRoot ? '14px 20px' : '10px 14px',
          fontWeight: isRoot ? 'bold' : '600',
          fontSize: isRoot ? '14px' : '12px',
          boxShadow: isRoot
            ? '0 8px 25px rgba(234, 153, 64, 0.4)'
            : '0 4px 12px rgba(0, 0, 0, 0.15)',
          cursor: 'pointer',
          width: isRoot ? '190px' : 'auto',
          textAlign: 'center'
        }
      };
    });

    const initialEdges = (relationships.edges || []).map((edge) => ({
      id: edge.id,
      source: edge.source,
      target: edge.target,
      label: edge.label,
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#6CA3A2', strokeWidth: 2 },
      labelStyle: { fill: '#12212E', fontWeight: 700, fontSize: 10 },
      labelBgStyle: { fill: '#ECE7DC', color: '#12212E', rx: 4, ry: 4 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#EA9940' }
    }));

    return { initialNodes, initialEdges };
  }, [relationships]);

  const { initialNodes, initialEdges } = generateInitialFlowData();
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_event, node) => {
    setSelectedNode(node.data.raw || { id: node.id, label: node.data.label, type: node.data.type });
  }, []);

  const handleFilter = (type) => {
    setFilterType(type);
    const { initialNodes: n, initialEdges: e } = generateInitialFlowData();
    if (type === 'all') {
      setNodes(n);
      setEdges(e);
    } else {
      const filteredN = n.filter((item) => item.id === 'root' || item.data.type === type);
      const filteredIds = new Set(filteredN.map((item) => item.id));
      const filteredE = e.filter((item) => filteredIds.has(item.source) && filteredIds.has(item.target));
      setNodes(filteredN);
      setEdges(filteredE);
    }
    setTimeout(() => rfInstance?.fitView({ padding: 0.2, duration: 300 }), 50);
  };

  const handleResetGraph = () => {
    setFilterType('all');
    setSelectedNode(null);
    const { initialNodes: n, initialEdges: e } = generateInitialFlowData();
    setNodes(n);
    setEdges(e);
    setTimeout(() => rfInstance?.fitView({ padding: 0.2, duration: 350 }), 50);
  };

  if (!relationships || !relationships.nodes || relationships.nodes.length === 0) {
    return (
      <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 space-y-2">
        <Network className="w-10 h-10 mx-auto text-slate-300" />
        <h4 className="font-serif font-bold text-[#12212E] text-base">No Graph Data Available</h4>
        <p className="text-xs text-slate-500">
          No entity relationship graph has been generated for this heritage record yet.
        </p>
      </div>
    );
  }

  const selectedDegree = selectedNode
    ? edges.filter((e) => e.source === selectedNode.id || e.target === selectedNode.id).length
    : 0;

  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-md p-5 space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-4">
        <div>
          <h3 className="font-serif font-bold text-[#12212E] text-lg flex items-center gap-2">
            <Network className="w-5 h-5 text-[#EA9940]" />
            Historical Knowledge &amp; Entity Graph
          </h3>
          <p className="text-xs text-slate-500">
            Drag nodes, zoom canvas, or click any entity to inspect spatio-temporal relationships
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="flex flex-wrap items-center gap-1 bg-slate-100 p-1.5 rounded-xl text-xs">
            <Filter className="w-3.5 h-3.5 text-[#307082] ml-1 mr-1" />
            {filterTypes.map((t) => (
              <button
                key={t}
                onClick={() => handleFilter(t)}
                className={`px-2.5 py-1 rounded-lg font-medium capitalize transition-colors ${
                  filterType === t
                    ? 'bg-[#12212E] text-[#EA9940] shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <button
            onClick={() => rfInstance?.fitView({ padding: 0.2, duration: 300 })}
            title="Fit View"
            className="px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#12212E] text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5 text-[#307082]" />
            <span>Fit View</span>
          </button>

          <button
            onClick={handleResetGraph}
            title="Reset Graph Layout"
            className="px-3 py-2 rounded-xl bg-[#12212E] hover:bg-[#307082] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5 text-[#EA9940]" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 h-[520px]">
        <div className="lg:col-span-3 rounded-xl border border-slate-200 bg-[#0d1822] overflow-hidden relative h-full">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            onInit={setRfInstance}
            fitView
          >
            <Background color="#307082" gap={20} size={1} />
            <Controls className="bg-white text-slate-900 border border-slate-200 shadow-md rounded-lg" />
          </ReactFlow>
        </div>

        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4 text-[#307082]" />
              Entity Inspector
            </h4>

            {selectedNode ? (
              <div className="space-y-3 animate-fade-in">
                <div className="p-3 bg-white rounded-xl border border-slate-200 shadow-sm">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#EA9940] px-2 py-0.5 rounded bg-[#12212E]">
                    {selectedNode.type || 'Entity'}
                  </span>
                  <h5 className="font-serif font-bold text-[#12212E] text-base mt-2">
                    {selectedNode.label}
                  </h5>
                </div>

                <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs space-y-2 text-slate-600">
                  <p>
                    Connected entity in{' '}
                    <span className="font-semibold text-[#12212E]">{artifactName}</span> heritage knowledge graph.
                  </p>
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                    <span>Graph Degree: {selectedDegree} {selectedDegree === 1 ? 'link' : 'links'}</span>
                    <span className="text-emerald-600 font-semibold">Verified Node</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 text-center text-slate-400 space-y-2">
                <Info className="w-8 h-8 mx-auto text-slate-300" />
                <p className="text-xs">
                  Click any node on the graph canvas to inspect entity properties and historical links.
                </p>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
            <span>Nodes: {nodes.length}</span>
            <span>Edges: {edges.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeGraph;
