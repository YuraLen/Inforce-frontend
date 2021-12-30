import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        };
    }

    static getDerivedStateFromError(error) {
        // Обновить состояние с тем, чтобы следующий рендер показал запасной UI.
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        // Можно также сохранить информацию об ошибке в соответствующую службу журнала ошибок
        console.warn(error, errorInfo, 'send....');
    }

    render() {
        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return(
              <div>
                <div>
                  <img src="https://www.iconpacks.net/icons/1/free-error-icon-905-thumb.png"/>
                  Oops. Something wrong.
                </div>
              </div>
            );
        }

        return this.props.children;
    }
}