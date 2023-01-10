import {App} from '../App'
import PropTypes from 'prop-types';

// import { Statistic, Title, List, Item, Label, Percentage } from "./Statistics.styled";

export const Statistics = ({ title, stats }) => {
    return (
<section class="statistics">
  <h2 class="title">Upload stats</h2>
  {/* <{title ? Title : TitleisHidden}>{title} <{title ? Title : TitleisHidden}/> */}
  <ul class="stat-list">
    <li class="item">
    {stats.map((stats) => (
                    <item key={stats.id}>
                        <span>{stats.label}</span>
                        <span>{stats.percentage}%</span>
                    </item>
                     ))}
    </li>
      </ul>
</section>



        // <Statistic>

        //     {title && <Title>{title}</Title>}

        //     <List >
        //         {stats.map((stats) => (
        //             <Item key={stats.id}>
        //                 <Label >{stats.label}</Label>
        //                 <Percentage >{stats.percentage}%</Percentage>
        //             </Item>

        //         ))}

        //     </List>
        // </Statistic>
    )
}


Statistics.propTypes ={
  title: PropTypes.string,
  stats: PropTypes.string,
}