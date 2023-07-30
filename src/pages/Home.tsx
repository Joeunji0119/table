/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import axios from 'axios';
import { useEffect, useMemo, useState } from 'react';
import { Column, useTable } from 'react-table';

interface RowData {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	gender: string;
	university: string;
}
//https://github.com/machadop1407/react-table-tutorial/blob/main/src/App.js

const Home = () => {
	const data = useMemo(() => fakeData, []);
	const columns: Column<RowData>[] = useMemo(
		() => [
			{
				Header: 'ID',
				accessor: 'id',
			},
			{
				Header: 'First Name',
				accessor: 'first_name',
			},
			{
				Header: 'Last Name',
				accessor: 'last_name',
			},
			{
				Header: 'Emaills',
				accessor: 'email',
			},
			{
				Header: 'Gender',
				accessor: 'gender',
			},
			{
				Header: 'University',
				accessor: 'university',
			},
		],
		[]
	);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
		useTable({ columns, data });

	return (
		<Layout>
			{/* <div>
				{fakeData.map(el => (
					<div>{el.id}</div>
				))}
			</div> */}
			{/* <Layout> */}
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map(headerGroup => (
						<tr {...headerGroup.getHeaderGroupProps()}>
							{headerGroup.headers.map(column => (
								<th {...column.getHeaderProps()}>{column.render('Header')}</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{rows.map(row => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map(cell => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
		</Layout>
		// </Layout>
	);
};

export default Home;

const Layout = styled.div`
	${({ theme }) => theme.variables.flex()}
	height: 100vh;
	background: pink;
	color: ${({ theme }) => theme.colors.white};
`;

const fakeData = [
	{
		id: 1,
		first_name: 'Millicent',
		last_name: 'Whatham',
		email: 'mwhatham0@comsenz.com',
		gender: 'Female',
		university: 'Samarkand State University',
	},
	{
		id: 2,
		first_name: 'Siward',
		last_name: 'Amberger',
		email: 'samberger1@behance.net',
		gender: 'Male',
		university: 'Institute of Industrial Electronics Engineering',
	},
	{
		id: 3,
		first_name: 'Sheree',
		last_name: 'Madeley',
		email: 'smadeley2@google.com',
		gender: 'Female',
		university: 'Kateb Institute of Higher Education',
	},
	{
		id: 4,
		first_name: 'Egor',
		last_name: 'Downing',
		email: 'edowning3@nymag.com',
		gender: 'Male',
		university: 'Universidad de Concepción del Uruguay',
	},
	{
		id: 5,
		first_name: 'Donn',
		last_name: 'Wilce',
		email: 'dwilce4@answers.com',
		gender: 'Male',
		university: 'State University of New York at Binghamton',
	},
	{
		id: 6,
		first_name: 'Kenon',
		last_name: 'Jersch',
		email: 'kjersch5@youtu.be',
		gender: 'Male',
		university: 'Université de Nantes',
	},
	{
		id: 7,
		first_name: 'Klara',
		last_name: 'Valett',
		email: 'kvalett6@plala.or.jp',
		gender: 'Female',
		university: 'Gifu Keizai University',
	},
	{
		id: 8,
		first_name: 'Roberta',
		last_name: 'Glendinning',
		email: 'rglendinning7@ft.com',
		gender: 'Female',
		university: 'University of Marketing and Distribution Sciences',
	},
	{
		id: 9,
		first_name: 'Murray',
		last_name: 'Gherarducci',
		email: 'mgherarducci8@webmd.com',
		gender: 'Male',
		university: 'New World University',
	},
	{
		id: 10,
		first_name: 'Hamid',
		last_name: 'Wixey',
		email: 'hwixey9@alibaba.com',
		gender: 'Male',
		university: 'Kagawa Institute of Nutrition',
	},
	{
		id: 11,
		first_name: 'Neils',
		last_name: 'Gyorgy',
		email: 'ngyorgya@vistaprint.com',
		gender: 'Male',
		university: 'Fachhochschule Merseburg',
	},
	{
		id: 12,
		first_name: 'Janetta',
		last_name: 'Greger',
		email: 'jgregerb@google.com.br',
		gender: 'Female',
		university: 'Manuel S. Enverga University Foundation',
	},
	{
		id: 13,
		first_name: 'Marvin',
		last_name: 'Banasevich',
		email: 'mbanasevichc@macromedia.com',
		gender: 'Male',
		university: 'Rakuno Gakuen University',
	},
	{
		id: 14,
		first_name: 'Rolland',
		last_name: 'Zealy',
		email: 'rzealyd@1688.com',
		gender: 'Male',
		university:
			'Fachhochschule und Berufskollegs NTA, Prof.Dr. Grübler gemein. GmbH',
	},
	{
		id: 15,
		first_name: 'Rikki',
		last_name: 'McCorrie',
		email: 'rmccorriee@newsvine.com',
		gender: 'Female',
		university: 'Prescott College',
	},
	{
		id: 16,
		first_name: 'Francisco',
		last_name: 'Kilbee',
		email: 'fkilbeef@va.gov',
		gender: 'Male',
		university: 'Universidad Catolica de Azogues',
	},
	{
		id: 17,
		first_name: 'Wittie',
		last_name: 'Paoletto',
		email: 'wpaolettog@free.fr',
		gender: 'Male',
		university: 'City University of New York, School of Law at Queens College',
	},
	{
		id: 18,
		first_name: 'Boonie',
		last_name: 'Benard',
		email: 'bbenardh@liveinternet.ru',
		gender: 'Genderqueer',
		university: 'The Illinois Institute of Art-Chicago',
	},
	{
		id: 19,
		first_name: 'Alleen',
		last_name: 'Hollidge',
		email: 'ahollidgei@answers.com',
		gender: 'Female',
		university: 'Universidad Central del Ecuador',
	},
	{
		id: 20,
		first_name: 'Reade',
		last_name: 'Studdeard',
		email: 'rstuddeardj@statcounter.com',
		gender: 'Male',
		university: 'University of East London',
	},
	{
		id: 21,
		first_name: 'Cairistiona',
		last_name: 'McGerraghty',
		email: 'cmcgerraghtyk@netscape.com',
		gender: 'Female',
		university: 'Wilmington College',
	},
	{
		id: 22,
		first_name: 'Georgette',
		last_name: 'Rhydderch',
		email: 'grhydderchl@cnbc.com',
		gender: 'Female',
		university: 'Bashkir State University',
	},
	{
		id: 23,
		first_name: 'Jenelle',
		last_name: 'Rossey',
		email: 'jrosseym@dropbox.com',
		gender: 'Female',
		university: 'New York Medical College',
	},
	{
		id: 24,
		first_name: 'Annalee',
		last_name: 'Wilshaw',
		email: 'awilshawn@squarespace.com',
		gender: 'Agender',
		university: 'Universidad Latinoamericana de Ciencia y Tecnología',
	},
	{
		id: 25,
		first_name: 'Emmeline',
		last_name: 'Jaze',
		email: 'ejazeo@prnewswire.com',
		gender: 'Genderqueer',
		university: 'L.N. Gumilyov Eurasian National University',
	},
	{
		id: 26,
		first_name: 'Fraze',
		last_name: "O' Liddy",
		email: 'foliddyp@csmonitor.com',
		gender: 'Male',
		university: 'Neumann College',
	},
	{
		id: 27,
		first_name: 'Alva',
		last_name: 'Darbon',
		email: 'adarbonq@adobe.com',
		gender: 'Male',
		university: 'Hogeschool Leiden',
	},
	{
		id: 28,
		first_name: 'Eugenio',
		last_name: 'Kenny',
		email: 'ekennyr@reverbnation.com',
		gender: 'Male',
		university: 'Hubert Kairuki Memorial University',
	},
	{
		id: 29,
		first_name: 'Florella',
		last_name: 'Risdale',
		email: 'frisdales@aol.com',
		gender: 'Female',
		university: 'Ecole Polytechnique Marseille',
	},
	{
		id: 30,
		first_name: 'Jenna',
		last_name: 'Lismer',
		email: 'jlismert@issuu.com',
		gender: 'Female',
		university: 'Albertus Magnus College',
	},
	{
		id: 31,
		first_name: 'Dorie',
		last_name: "O'Gormley",
		email: 'dogormleyu@naver.com',
		gender: 'Bigender',
		university: 'Babol Noshirvani University of Technology',
	},
];
