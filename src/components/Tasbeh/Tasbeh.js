import {useState} from 'react'
import styled from 'styled-components'
import {Add} from 'iconsax-react'
import { useTranslation } from 'react-i18next';

const Tasbeh = (props)=>{
	// eslint-disable-next-line
	const [t,i18n] = useTranslation()
	const TasbehContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 70vh;
	h1{
		margin: 2rem 0;
	}
	`

	const Button = styled.button`
	border-radius: 50px;
	border: 2px solid ${props.primaryColor};
	padding: 3rem;
		display:flex;
		flex-direction: column;
		font-size: 80px;
		align-items: center;

	svg path{
		display: block;
	}
	`

	const [count, setCount] = useState(0)

	if(count===34){
		setCount(0)
	}
	return(
		<TasbehContainer>
		<h1>{t('tasbeh')}</h1>
		<Button onClick={()=>setCount(count +1)}>
		<Add size="64"/>{count}
		</Button>
		</TasbehContainer>
		)
}

export default Tasbeh