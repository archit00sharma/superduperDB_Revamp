import { Slider } from 'shared/components/Slider';
import DatabricksIcon from 'shared/icons/databricks.svg';
import DuckDBIcon from 'shared/icons/duck-db.svg';
import MongoDBIcon from 'shared/icons/mongo-db.svg';
import PostgreSQLIcon from 'shared/icons/postgresql.svg';
import SnowflakeIcon from 'shared/icons/snowflake.svg';
import SQLiteIcon from 'shared/icons/sqlite.svg';

import './db-slider.scss';

const dbSlides = [
  { key: 'mongo', icon: <MongoDBIcon /> },
  { key: 'databricks', icon: <DatabricksIcon /> },
  { key: 'snowflake', icon: <SnowflakeIcon /> },
  { key: 'postgres', icon: <PostgreSQLIcon /> },
  { key: 'duck', icon: <DuckDBIcon /> },
  { key: 'sqlite', icon: <SQLiteIcon /> },
]

interface DBSliderProps {
  section: string; // You can replace 'string' with the actual type of your sections
}

const DBSlider: React.FC<DBSliderProps> = ({ section }) => {
  return (
    section === 'main' ?
      <section className="db-slides__container">
        <Slider slides={dbSlides} />
      </section>
      :
      <section className="db-slides__container_mongodb">
        <MongoDBIcon />
      </section>
  );
};


export default DBSlider;
