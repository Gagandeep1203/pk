import React from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, Paper } from '@mui/material';

function BlogDetail() {
  const { id } = useParams();
  return (
    <Box  sx={{ p: 3 }}>
      <Paper sx={{ p: 2 }}>
        <Typography variant="h4" gutterBottom>Blog Post #{id}</Typography>
        <Typography variant="body1">This is the detail view for blog post #{id}. Content coming soon.</Typography>
      </Paper>
    </Box>
  );
}

export default BlogDetail;
