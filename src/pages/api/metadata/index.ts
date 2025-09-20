import { NextApiRequest, NextApiResponse } from 'next';
import { ComponentMetadataRegistry, getPerformanceMetrics } from '@/metadata';
import { generateProjectStats } from '@/utils/metadataHelper';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const allMetadata = Object.values(ComponentMetadataRegistry);
    const projectStats = generateProjectStats(allMetadata);
    const performanceMetrics = getPerformanceMetrics();
    
    res.status(200).json({
      success: true,
      data: {
        projectStats,
        performanceMetrics,
        components: Object.keys(ComponentMetadataRegistry),
        totalComponents: allMetadata.length
      }
    });
  } else {
    res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }
}
