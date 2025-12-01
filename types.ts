

// FIX: Import React to resolve 'Cannot find namespace React' error.
// import React from 'react'; // This line is removed as React.ReactNode does not require a direct React import in modern React versions.
import type React from 'react';

export interface Technician {
    name: string;
    title: string;
    bio: string;
    imageUrl: string;
}

export interface Testimonial {
    quote: string;
    author: string;
    vehicle: string;
}

export interface Service {
    name: string;
    description: string;
    icon: React.ReactNode;
    imageUrl?: string;
}