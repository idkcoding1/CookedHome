import React from 'react';
import useMenu from '../hooks/useMenu';
import { Box, Stack, Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

const Menu: React.FC = () => {
    const { meals, loading, error } = useMenu();

    if (loading) {
        return <Box textAlign="center" py={4}>Loading...</Box>;
    }

    if (error) {
        return <Box textAlign="center" py={4} color="error.main">{error}</Box>;
    }

    if (!meals || meals.length === 0) {
        return <Box textAlign="center" py={4}>No meals available</Box>;
    }

    return (
        <Container maxWidth="lg">
            <Box py={4}>
                <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                    Today's Menu
                </Typography>
                <Stack spacing={3}>
                    <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3 }}>
                        {meals.map((meal) => (
                            <Card key={meal._id || Math.random()}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={meal.image}
                                    alt={meal.name}
                                    sx={{ objectFit: 'cover' }}
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h2">
                                        {meal.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" gutterBottom>
                                        {meal.description}
                                    </Typography>
                                    <Typography variant="h6" color="primary">
                                        Rs. {meal.price}
                                    </Typography>
                                    <Typography variant="body2">
                                        Serving Size: {meal.servingSize} person(s)
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Category: {meal.category}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </Box>
                </Stack>
            </Box>
        </Container>
    );
};

export default Menu; 