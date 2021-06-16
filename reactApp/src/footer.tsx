import { FC } from 'react';

const Footer: FC = () => (
    <nav role="navigation" className="nav-table">
        <ul>
            <li>
                <a rel="noopener noreferrer" href="https://www.linkedin.com/in/tom-o-shaughnessy/" target="_blank">
                    <img
                        src={'./square-linkedin-512.png'}
                        width="30px"
                        height="auto"
                        alt="LinkedIn"
                    />
                </a>
            </li>
            <li>
                <a rel="noopener noreferrer" href="https://github.com/tomoshaughnessy/guesstimoji" target="_blank">
                    <img
                        src={'./square-github.png'}
                        width="30px"
                        height="auto"
                        alt="GitHub"
                    />
                </a>
            </li>
            <li>
                <a rel="noopener noreferrer" href="http://localhost:3005/graphql" target="_blank">
                    <img
                        src={'./square-graphql.png'}
                        width="30px"
                        height="auto"
                        alt="GraphQL API"
                    />
                </a>
            </li>
        </ul>
    </nav>
);

export default Footer;
