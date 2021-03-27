import { SetMetadata } from '@nestjs/common';

// create custom decorator '@Public()' to declare public routes, not requiring authentication
export const IS_PUBLIC_KEY = 'isPublic';
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);
