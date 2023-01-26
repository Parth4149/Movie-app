import { Typography, Button } from '@mui/material';
import styles from './styles';

const Pagination = ({ currentPage, setPage, totalPages }) => {
  // const currentPage = 1;
  console.log('Pagination');

  const handlePrev = () => {
    if (currentPage === 1) return;
    setPage((prevPage) => prevPage - 1);
  };
  const handleNext = () => {
    if (currentPage === totalPages) return;
    setPage((prevPage) => prevPage + 1);
  };

  if (totalPages === 0) return null; // we don't need to show this component

  return (
    <div style={styles.container}>
      <Button onClick={handlePrev} sx={styles.button} variant="contained" color="primary" type="button">Prev</Button>
      <Typography variant="h4" sx={styles.pageNumber}>{currentPage}</Typography>
      <Button onClick={handleNext} sx={styles.button} variant="contained" color="primary" type="button">Next</Button>
    </div>
  );
};

export default Pagination;
