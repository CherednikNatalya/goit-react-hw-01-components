import {App} from '../App'
import {Statistics,Title,List, Item,Label, Percentage } from './Statistics.styled'

export default function Statistics ({title, stats}) {
    return (
        <Statistics>

          {title && <Title>{title}</Title>}

          <List>
            {stats.map((stats)=>(
              <Item key={stats.id}>
                <Label>{stats.label}</Label>
                <Percentage>{stats.percentage}% </Percentage>
              </Item>
            ))}
          </List>
          </Statistics>

    )
}