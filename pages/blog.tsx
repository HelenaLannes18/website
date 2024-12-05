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
            <h1>Meu Blog Post</h1>
            <p>Veja como o código abaixo se comporta ao ser executado:</p>
            <CodeExample code={code} />
        </div>
    );
};

export default BlogPost;
