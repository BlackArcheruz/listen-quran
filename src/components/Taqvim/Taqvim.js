import styled from 'styled-components'
import { useTranslation } from 'react-i18next';


const Taqvim =(props)=>{
	// eslint-disable-next-line
	const [t, i18n] = useTranslation()
	const data = [
		{
			id: '1',
			saharlik: '04:47',
			iftorlik: '18:51'
		},
		{
			id: '2',
			saharlik: '04:45',
			iftorlik: '18:52'
		},
		{
			id: '3',
			saharlik: '04:43',
			iftorlik: '18:53'
		},
		{
			id: '4',
			saharlik: '04:41',
			iftorlik: '18:54'
		},
		{
			id: '5',
			saharlik: '04:39',
			iftorlik: '18:55'
		},
		{
			id: '6',
			saharlik: '04:37',
			iftorlik: '18:56'
		},
		{
			id: '7',
			saharlik: '04:35',
			iftorlik: '18:57'
		},
		{
			id: '8',
			saharlik: '04:34',
			iftorlik: '18:58'
		},
		{
			id: '9',
			saharlik: '04:32',
			iftorlik: '18:59'
		},
		{
			id: '10',
			saharlik: '04:30',
			iftorlik: '19:00'
		},
		{
			id: '11',
			saharlik: '04:28',
			iftorlik: '19:01'
		},
		{
			id: '12',
			saharlik: '04:26',
			iftorlik: '19:03'
		},
		{
			id: '13',
			saharlik: '04:25',
			iftorlik: '19:04'
		},
		{
			id: '14',
			saharlik: '04:23',
			iftorlik: '19:05'
		},
		{
			id: '15',
			saharlik: '04:21',
			iftorlik: '19:06'
		},
		{
			id: '16',
			saharlik: '04:19',
			iftorlik: '19:07'
		},
		{
			id: '17',
			saharlik: '04:17',
			iftorlik: '19:08'
		},
		{
			id: '18',
			saharlik: '04:15',
			iftorlik: '19:09'
		},
		{
			id: '19',
			saharlik: '04:13',
			iftorlik: '19:10'
		},
		{
			id: '20',
			saharlik: '04:12',
			iftorlik: '19:11'
		},
		{
			id: '21',
			saharlik: '04:10',
			iftorlik: '19:12'
		},
		{
			id: '22',
			saharlik: '04:08',
			iftorlik: '19:13'
		},
		{
			id: '23',
			saharlik: '04:06',
			iftorlik: '19:14'
		},
		{
			id: '24',
			saharlik: '04:05',
			iftorlik: '19:15'
		},
		{
			id: '25',
			saharlik: '04:04',
			iftorlik: '19:17'
		},
		{
			id: '26',
			saharlik: '04:02',
			iftorlik: '19:18'
		},
		{
			id: '27',
			saharlik: '03:59',
			iftorlik: '19:19'
		},
		{
			id: '28',
			saharlik: '03:57',
			iftorlik: '19:20'
		},
		{
			id: '29',
			saharlik: '03:56',
			iftorlik: '19:22'
		},
		{
			id: '30',
			saharlik: '03:54',
			iftorlik: '19:22'
		}
	]
	const TaqvimContainer = styled.div`
		padding: 3rem;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		h1{
			margin-bottom: 10px;
		}
	`
	const TaqvimContent = styled.div`
	display: flex;
		align-items: center;
		flex-direction: column;
    `
    const Card = styled.div`
    .primary-card{

        height: auto;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        border-radius:10px;
        box-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        padding:2rem 1rem;
        margin:1rem 0;
        border: 2px solid rgb(209 213 219);
        *{
            padding:0.25rem 0;
        }
        .duo{
            color: ${props.primaryColor};
        }
    }
    `
	return(
		<TaqvimContainer>
		<h1>Ramazon Taqvimi</h1>
		<TaqvimContent>
		{data.map(kun=>(
			<Card key={kun.id}>
        <div className="primary-card">
        	<h1>{kun.id}-{t('kun')}</h1>
        	<h2>{t('saharlik_vaqti')}</h2>
        	<h2>{kun.saharlik}</h2>
            <h4>{t('saharlik')}</h4>
            <h5 className="duo">نَوَيْتُ أَنْ أَصُومَ صَوْمَ شَهْرَ رَمَضَانَ مِنَ الْفَجْرِ إِلَى الْمَغْرِبِ، خَالِصًا لِلهِ تَعَالَى أَللهُ أَكْبَرُ</h5>
            <p className="duo">{t('dua_saharlik')}</p>
            <h2>{t('iftarlik_vaqti')}</h2>
        	<h2>{kun.iftorlik}</h2>
            <h4>{t('iftorlik')}</h4>
            <h5 className="duo">اَللَّهُمَّ لَكَ صُمْتُ وَ بِكَ آمَنْتُ وَ عَلَيْكَ تَوَكَّلْتُ وَ عَلَى رِزْقِكَ أَفْتَرْتُ، فَغْفِرْلِى مَا قَدَّمْتُ وَ مَا أَخَّرْتُ بِرَحْمَتِكَ يَا أَرْحَمَ الرَّاحِمِينَ</h5>
            <p className="duo">{t('dua_iftarlik')}</p>
            </div>
        </Card>))}
        </TaqvimContent>
		</TaqvimContainer>
	)
}


export default Taqvim