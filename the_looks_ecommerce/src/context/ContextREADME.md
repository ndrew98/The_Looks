# Context Directory Documentation

## Overview
The context directory manages global state for The Looks E-commerce application using React's Context API. This implementation follows best practices by separating context creation from its provider implementation.

## Files Structure

### `ShopContextData.js`
- Creates the base ShopContext object
- Exports the context for use in other components
- Keeps context creation isolated for better Fast Refresh support

### `ShopContext.jsx`
- Implements the ShopContextProvider component
- Manages global state values:
  - Product catalog
  - Currency (GH₵)
  - Delivery fee (10 GH₵)
- Provides business logic and state management

## Current Features
The ShopContext currently provides:
```javascript
{
  products,     // Product catalog from assets
  currency,     // "GH₵" (Ghana Cedis)
  delivery_fee  // Fixed at 10 GH₵
}
```

## Usage Example

### Wrapping Your App
```jsx
// App.jsx
import ShopContextProvider from './context/ShopContext';

function App() {
  return (
    
      {/* Your app components */}
    
  );
}
```

### Using Context in Components
```jsx
// YourComponent.jsx
import { useContext } from 'react';
import { ShopContext } from './context/ShopContextData';

function YourComponent() {
  const { products, currency, delivery_fee } = useContext(ShopContext);
  
  return (
    
      {/* Use context values here */}
      Price: {currency} {price}
    
  );
}
```

## Best Practices
1. **Separation of Concerns**
   - Context creation is kept separate from provider implementation
   - Each file has a single responsibility

2. **Performance**
   - Only components that use the context will re-render when it changes
   - Keep context values focused and specific

3. **Maintenance**
   - Add new global state values to the `value` object in `ShopContext.jsx`
   - Document any new additions in this README

## Future Enhancements
Potential features to add:
- Shopping cart management
- User preferences
- Authentication state
- Order history

## Contributing
When adding new features to the context:
1. Update the `value` object in `ShopContext.jsx`
2. Document new values in this README
3. Update usage examples if necessary