// components/CodeExample.tsx
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface CodeExampleProps {
    code: string;
}

const CodeExample: React.FC<CodeExampleProps> = ({ code }) => {
    return (
        <LiveProvider code={code}>
            <div style={{ display: 'flex', gap: '20px' }}>
                <div style={{ flex: 1 }}>
                    <LiveEditor />
                    <LiveError />
                </div>
                <div style={{ flex: 1 }}>
                    <LivePreview />
                </div>
            </div>
        </LiveProvider>
    );
};

export default CodeExample;
