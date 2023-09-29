import React from 'react'
import { HeaderButton, HeaderContainer, HeaderForm, HeaderTitle, SearchInput, SelectBox } from './Header.style'

import { useTranslation } from 'react-i18next';

const Header = ({setQuery,setSelectType, getData}) => {
  const printTypeEn = ["all", "books", "magazines"];
  const printTypeTr = ["Tümü", "Kitaplar", "Dergiler"];
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  }

  return (
    <HeaderContainer>
      <HeaderTitle>{t("home.booksorMagazines")}</HeaderTitle>
      <HeaderForm onSubmit={handleSubmit}>
        <SearchInput type="text" placeholder={t("home.search")} onChange={(e)=> setQuery(e.target.value)} required/>
        <SelectBox onChange={(e)=> setSelectType(e.target.value)}>
          {
            t("lang")==="en"?(printTypeEn.map((type)=>{
              return <option key={type} value={type}>{type}</option>;
            })):(printTypeTr.map((type)=>{
              return <option key={type} value={type}>{type}</option>;
            }))
          }
          </SelectBox> 
          <HeaderButton type='submit'>
          {t("home.search")}
          </HeaderButton>
      </HeaderForm>
    </HeaderContainer>
  )
}

export default Header