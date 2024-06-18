import { Edge, Node, ClusterNode } from '@swimlane/ngx-graph';

export const nodes: Node[] = [
  {
    id: 'first',
    label: 'G.E. Moore'
  }, {
    id: 'second',
    label: 'Logical Empricism and Its End'
  }, {
    id: 'c1',
    label: 'Logical Atomism'
  }, {
    id: 'c2',
    label: 'Burtrand Russell'
  },
  {
    id: 'c3',
    label: 'Gottlob Frege'
  }, {
    id: 'c4',
    label: 'Ludwig Wittgenstein'
  }
];

export const clusters: ClusterNode[] = [
  {
    id: 'third',
    label: 'C',
    childNodeIds: ['c1', 'c2', 'c3', 'c4']
  }
]

export const links: Edge[] = [
  {
    id: 'a',
    source: 'first',
    target: 'second',
    label: 'Rejection'
  }, {
    id: 'b',
    source: 'first',
    target: 'c2',
    label: 'Rejection'
  }, {
    id: 'c',
    source: 'c2',
    target: 'c3',
    label: 'Challenge'
  }
];
