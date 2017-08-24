module.exports = {
    title: 'Gene',
    selectors: {
        summary_section: '#summary',
        summary_symbol: '#summary > table > tbody > tr:nth-child(1) > td',
        summary_name: '#summary > table > tbody > tr:nth-child(2) > td',
        summary_synonyms: '#summary > table > tbody > tr:nth-child(3) > td',
        summary_type: '#summary > table > tbody > tr:nth-child(4) > td',
        summary_location: '#summary > table > tbody > tr:nth-child(5) > td',
        summary_strand: '#summary > table > tbody > tr:nth-child(6) > td',
        summary_description: '#summary > table > tbody > tr:nth-child(7) > td',
        summary_annotation: '#summary > table > tbody > tr:nth-child(8) > td',
        
        external_references_section: '#skip > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div',
        external_references_entrez_gene: '#skip > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > div.undefined.test-entity-table-wrapper > table > tbody > tr:nth-child(1) > td',
        external_references_uniprotkb_swissprot: '#skip > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr:nth-child(2) > td',
        external_references_hgnc: '#skip > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr:nth-child(3) > td',
        external_references_omim_gene: '#skip > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr:nth-child(4) > td',
        external_references_ensembl: '#skip > div > div > div:nth-child(2) > div > div:nth-child(1) > div:nth-child(2) > div > table > tbody > tr:nth-child(5) > td',
    }
}
