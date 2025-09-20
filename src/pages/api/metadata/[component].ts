import { NextApiRequest, NextApiResponse } from 'next';
import { ComponentMetadataRegistry, getComponentMetadata } from '@/metadata';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;
  
  if (req.method === 'GET') {
    if (typeof component === 'string') {
      const metadata = getComponentMetadata(component);
      
      if (metadata) {
        res.status(200).json({
          success: true,
          data: metadata
        });
      } else {
        res.status(404).json({
          success: false,
          error: 'Component not found',
          availableComponents: Object.keys(ComponentMetadataRegistry)
        });
      }
    } else {
      res.status(400).json({
        success: false,
        error: 'Component name is required'
      });
    }
  } else {
    res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }
}
