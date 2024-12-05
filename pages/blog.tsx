// pages/blog.tsx
import CodeExample from '../components/CodeExample';

const BlogPost: React.FC = () => {
  const code = `
    function App() {
      return <h1>Hello, world!</h1>;
    }
    render(<App />);
  `;

  return (
    <div>
      <h1>Teste Bloco COdigo</h1>
      <CodeExample code={code} />
    </div>
  );
};

export default BlogPost;
