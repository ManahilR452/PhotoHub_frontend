const API_URL = import.meta.env.VITE_API_URL;

const loadPhotosAndCalculateWinners = async () => {
  try {
    setLoading(true);

    const response = await fetch(`${API_URL}/api/photos/recent?days=7`);

    if (!response.ok) {
      throw new Error('Failed to fetch photos');
    }

    const data = await response.json();
    setPhotos(data);

    if (data.length === 0) {
      toast.info('No photos from last 7 days!');
      return;
    }

    const winners = calculateWinnersByCategory(data);
    setCurrentWinners(winners);

  } catch (err) {
    console.error('Failed to load photos:', err);
    toast.error('Failed to load photos');
  } finally {
    setLoading(false);
  }
};

const calculateWinnersByCategory = (photos) => {
  const categories = [
    'Nature',
    'Urban',
    'Architecture',
    'Wildlife',
    'Portrait',
    'Landscape'
  ];

  const winners = {};

  categories.forEach(category => {
    const categoryPhotos = photos.filter(p => p.category === category);

    if (!categoryPhotos.length) {
      winners[category] = null;
      return;
    }

    const photosWithScores = categoryPhotos.map(photo => {
      const likes = photo.likes || 0;

      // Minimum 3 likes to qualify
      if (likes < 3) return { ...photo, score: 0 };

      const uploadDate = new Date(photo.createdAt);
      const daysSince = Math.max(
        (Date.now() - uploadDate) / (1000 * 60 * 60 * 24),
        1
      );

      return {
        ...photo,
        score: likes / daysSince
      };
    });

    winners[category] =
      photosWithScores
        .filter(p => p.score > 0)
        .sort((a, b) => b.score - a.score)[0] || null;
  });

  return winners;
};
