import { FC } from 'react';
import TreeGroup from './TreeGroup';
import Tree from './Tree';
import SmallHouse from './SmallHouse';
import MediumHouse from './MediumHouse';
import LargeHouse from './LargeHouse';
import './DayBuildings.scss';

const treeOverride = {
  background: `linear-gradient(250deg, rgb(72 160 71 / 72%) 0%, rgba(0, 0, 0, 0.2) 100%)`,
};
const DayBuildings: FC = () => {
  return (
    <div className="building">
      <h3 style={{ textAlign: 'center' }}>Day Buildings</h3>
      <div className="day">
        <div className="sun"></div>
        <div className="ground-wrapper">
          <SmallHouse left={290} roofColor="#ab5454" />
          <MediumHouse left={350} roofColor="#4699b6" />
          <MediumHouse left={415} roofColor="#4699b6" />
          <SmallHouse left={478} roofColor="#ab5454" />
          <LargeHouse left={600} roofColor="#7154ab" />
          <TreeGroup left={80}>
            <Tree height={70} width={40} left={40} override={treeOverride} />
            <Tree height={120} width={60} left={60} override={treeOverride} />
            <Tree height={90} width={60} left={90} override={treeOverride} />
            <Tree height={65} width={40} left={140} override={treeOverride} />
          </TreeGroup>
          <TreeGroup left={300}>
            <Tree height={200} width={100} left={0} override={treeOverride} />
            <Tree height={120} width={60} left={90} override={treeOverride} />
            <Tree height={160} width={90} left={120} override={treeOverride} />
          </TreeGroup>
          <TreeGroup left={470}>
            <Tree height={70} width={40} left={40} override={treeOverride} />
            <Tree height={120} width={60} left={60} override={treeOverride} />
            <Tree height={90} width={60} left={90} override={treeOverride} />
            <Tree height={65} width={40} left={140} override={treeOverride} />
          </TreeGroup>
          <TreeGroup left={600}>
            <Tree height={70} width={40} left={40} override={treeOverride} />
            <Tree height={120} width={60} left={60} override={treeOverride} />
            <Tree height={90} width={60} left={90} override={treeOverride} />
            <Tree height={200} width={90} left={140} override={treeOverride} />
          </TreeGroup>
          <div className="ground"></div>
        </div>
      </div>
    </div>
  );
};

export default DayBuildings;
