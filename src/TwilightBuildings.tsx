import { FC } from 'react';
import TreeGroup from './TreeGroup';
import Tree from './Tree';
import SmallHouse from './SmallHouse';
import MediumHouse from './MediumHouse';
import LargeHouse from './LargeHouse';
import './TwilightBuildings.scss';
const treeOverride = {
  background: `linear-gradient(250deg, rgb(253 210 161 / 75%) 0%, rgba(0, 0, 0, 0) 100%)`,
};
const flip = {
  transform: `scale(-1, 1)`,
};
const NightBuildings: FC = () => {
  return (
    <div className="building">
      <h3 style={{ textAlign: 'center' }}>Twilight Buildings</h3>
      <div className="twilight">
        <div className="ground-wrapper">
          <div className="ground">
            <SmallHouse
              wallColor="#1e1547"
              left={90}
              roofColor="#514b6e"
              overrides={flip}
            />
            <MediumHouse
              wallColor="#1e1547"
              left={50}
              roofColor="#514b6e"
              overrides={flip}
            />
            <SmallHouse wallColor="#1e1547" left={290} roofColor="#514b6e" />
            <MediumHouse wallColor="#1e1547" left={350} roofColor="#514b6e" />
            <MediumHouse wallColor="#1e1547" left={415} roofColor="#514b6e" />
            <SmallHouse wallColor="#1e1547" left={478} roofColor="#514b6e" />
            <LargeHouse wallColor="#1e1547" left={600} roofColor="#514b6e" />
            <TreeGroup left={80}>
              <Tree height={70} width={40} left={40} override={treeOverride} />
              <Tree height={120} width={60} left={60} override={treeOverride} />
              <Tree height={90} width={60} left={90} override={treeOverride} />
              <Tree height={65} width={40} left={140} override={treeOverride} />
            </TreeGroup>
            <TreeGroup left={300}>
              <Tree height={200} width={100} left={0} override={treeOverride} />
              <Tree height={120} width={60} left={90} override={treeOverride} />
              <Tree
                height={160}
                width={90}
                left={120}
                override={treeOverride}
              />
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
              <Tree
                height={200}
                width={90}
                left={140}
                override={treeOverride}
              />
            </TreeGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightBuildings;
