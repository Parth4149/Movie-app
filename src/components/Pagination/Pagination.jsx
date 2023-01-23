import { Typography, Button } from '@mui/material';
import styles from './styles';

const Pagination = () => {
  const currentPage = 1;
  console.log('Pagination');
  return (
    <div style={styles.container}>
      <Button style={styles.button} variant="contained" color="primary" type="button">Prev</Button>
      <Typography variant="h4" style={styles.pageNumber}>{currentPage}</Typography>
      <Button style={styles.button} variant="contained" color="primary" type="button">Next</Button>
    </div>
  );
};

export default Pagination;
