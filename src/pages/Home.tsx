/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';

const Home = () => {
	return <Layout>안녕</Layout>;
};

export default Home;

const Layout = styled.div`
	${({ theme }) => theme.variables.flex()}
	height: 30vh;
	background: pink;
	color: ${({ theme }) => theme.colors.white};
`;
