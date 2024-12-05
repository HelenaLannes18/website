import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type PostProps = {
    id: string;
    title: string;
    author: {
        name: string;
        email: string;
    } | null;
    content: string;
    published: boolean;
};

const Post: React.FC<{ post: PostProps }> = ({ post }) => {
    const authorName = post.author ? post.author.name : "Unknown author";
    return (
        <div className="px-3 flex flex-wrap justify-start gap-4">
            <div
                className="border-2 border-gray-500 hover:border-orange-500 transition-all rounded-lg p-8 flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                onClick={() => Router.push("/p/[id]", `/p/${post.id}`)}
            >
                <div className="flex flex-col xl:flex-row w-full items-stretch xl:items-center">
                    <div className="flex order-2 xl:order-1">
                        <div className="flex flex-col ml-5 text-left">
                            <p className="text-lg text-black-600 capitalize">
                                {post.title}
                            </p>
                            <p className="text-sm text-black-500 capitalize">
                                {post.author ? post.author.name : "Unknown author"}
                            </p>
                        </div>
                    </div>
                </div>
                <p className="mt-5 text-left">“{post.content}”</p>
            </div>
        </div>
    );
};

export default Post;
