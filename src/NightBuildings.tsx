import { FC } from 'react';
import TreeGroup from './TreeGroup';
import Tree from './Tree';
import SmallHouse from './SmallHouse';
import MediumHouse from './MediumHouse';
import LargeHouse from './LargeHouse';
import './NightBuildings.scss';

const flip = {
  transform: `scale(-1, 1)`,
};
const NightBuildings: FC = () => {
  return (
    <div className="building">
      <h3 style={{ textAlign: 'center' }}>Night Buildings</h3>
      <div className="night">
        <div className="moon"></div>
        <div className="ground-wrapper">
          <SmallHouse left={90} roofColor="#ab5454" overrides={flip} />
          <MediumHouse left={50} roofColor="#4699b6" overrides={flip} />
          <SmallHouse left={290} roofColor="#ab5454" />
          <MediumHouse left={350} roofColor="#4699b6" />
          <MediumHouse left={415} roofColor="#4699b6" />
          <SmallHouse left={478} roofColor="#ab5454" />
          <LargeHouse left={600} roofColor="#7154ab" />
          <TreeGroup left={80}>
            <Tree height={70} width={40} left={40} />
            <Tree height={120} width={60} left={60} />
            <Tree height={90} width={60} left={90} />
            <Tree height={65} width={40} left={140} />
          </TreeGroup>
          <TreeGroup left={300}>
            <Tree height={200} width={100} left={0} />
            <Tree height={120} width={60} left={90} />
            <Tree height={160} width={90} left={120} />
          </TreeGroup>
          <TreeGroup left={470}>
            <Tree height={70} width={40} left={40} />
            <Tree height={120} width={60} left={60} />
            <Tree height={90} width={60} left={90} />
            <Tree height={65} width={40} left={140} />
          </TreeGroup>
          <TreeGroup left={600}>
            <Tree height={70} width={40} left={40} />
            <Tree height={120} width={60} left={60} />
            <Tree height={90} width={60} left={90} />
            <Tree height={200} width={90} left={140} />
          </TreeGroup>
          <div className="ground">
            <div className="shadow"></div>
            <div className="shadow-2"></div>
            <div className="shadow-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightBuildings;
