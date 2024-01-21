/* eslint-disable react/prop-types */
import { Component } from "react";
import ErrorComponent from "./ErrorComponent";

export default class ErrorBoundary extends Component {
  constructor({ children }) {
    super({ children })
  }
  static getDerivedStateFromError (error) {
    return ({ hasError: true, error })
  }

  componentDidCatch (error, info) {
    if (import.meta.env.PROD !== true) console.error('Uncaught error =>', error, info);
  }

  render () {
    if (this.state && this.state.hasError) {
      return <ErrorComponent errorMsg="Oops! something went wrong" />
    }

    return this.props.children;
  }
}