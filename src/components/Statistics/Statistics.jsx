import PropTypes from 'prop-types';
import { Container } from 'components/App.styled';
import { getRandomHexColor } from 'utils/randomColor';
import {
  Label,
  List,
  ListItem,
  Percentage,
  Section,
  Title,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Container>
        {title && <Title>{title}</Title>}
        <List>
          {stats.map(({ id, label, percentage }) => {
            const color = getRandomHexColor();
            return (
              <ListItem key={id} bg={color}>
                <Label>{label}</Label>
                <Percentage>{percentage}</Percentage>
              </ListItem>
            );
          })}
        </List>
      </Container>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};

export default Statistics;
