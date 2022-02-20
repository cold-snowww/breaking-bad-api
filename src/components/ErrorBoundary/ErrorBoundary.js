import React from 'react';

export default class ErrorBoundary extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         error: null,
      };
   }

   static getDerivedStateFromError(error) {
      return { error };
   }

   componentDidCatch(error) {
      console.error(error);
   }

   render() {
      return this.state.error
         ? this.props.fallback(this.state.error)
         : this.props.children;
   }
}
