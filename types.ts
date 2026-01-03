// Added missing React import to provide the React namespace for types
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface CreatorFormData {
  fullName: string;
  email: string;
  handle: string;
  niche: string;
  followerCount: string;
  message: string;
}

export interface StrategyResponse {
  advice: string;
  trendingHooks: string[];
}