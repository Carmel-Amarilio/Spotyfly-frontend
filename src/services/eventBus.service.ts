type EventHandler<T> = (payload: T) => void;

interface EventEmitter<T> {
    on(evName: string, listener: EventHandler<T>): () => void;
    emit(evName: string, payload: T): void;
}

function createEventEmitter<T>(defaultHandler: (() => void) | null = null): EventEmitter<T> {
    const listenersMap: Record<string, EventHandler<T>[]> = {};
    const defHandler: (() => void) | null = defaultHandler;

    return {
        on(evName: string, listener: EventHandler<T>): () => void {
            listenersMap[evName] = listenersMap[evName] ? [...listenersMap[evName], listener] : [listener];
            return () => {
                listenersMap[evName] = listenersMap[evName].filter(func => func !== listener);
            };
        },
        emit(evName: string, payload: T): void {
            if (listenersMap[evName]) {
                listenersMap[evName].forEach(listener => listener(payload));
            } else if (defHandler) {
                defHandler();
            }
        }
    };
}

export const eventBus = createEventEmitter<unknown>(() => console.log('No handler found...'));
