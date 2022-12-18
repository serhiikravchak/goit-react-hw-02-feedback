import PropTypes from 'prop-types';
import { Box  } from 'components/common/GlobalStylex.styled';
import { Item, List } from './FeedbackStatistics.styled';

export function FeedbackStatistics({ list, total, positive }) {
  const items = Object.keys(list);
   return (
     <Box>
       <List>
         {items.map(item => {
           return (
             <li key={item}>
               {item}: {list[item]}
             </li>
           );
         })}
       </List>
       <p>Total: {total} </p>
       <p>
         Positive percentage: <span>{positive}%</span>
       </p>
     </Box>
   );
}

FeedbackStatistics.propType = {
  list: PropTypes.shape.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
