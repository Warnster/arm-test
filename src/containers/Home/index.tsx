import { Link } from 'react-router-dom';
import { getDocuments } from '../../utils';

export const Home = () => {
   
    const documents = getDocuments();

    return (
        <div>
            <h1 className='text-3xl'>Home</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {documents.map((document) => (
                    <div>
                        <Link className="text-blue-500" to={document.id}>{document.title}</Link>
                        <p>{document.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}