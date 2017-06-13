@GenePage
Feature: Test Gene Page

    # SVT-84
    Scenario: SVT-84 Verify a Gene Summary is Displayed
        Given I open the page "/genes/ENSG00000141510"
        And   I accept the privacy warning
        Then  I wait on element "@Common.load_indicator" to not be visible

        Then  I wait on element "@GenePage.summary_section" to be visible

        # Assuming these values never change
        Then  I expect that element "@GenePage.summary_section" contains the text "Summary"
        Then  I expect that element "@GenePage.summary_symbol" contains the text "TP53"
        Then  I expect that element "@GenePage.summary_name" contains the text "tumor protein p53"
        Then  I expect that element "@GenePage.summary_synonyms" contains the text "LFS1"
        Then  I expect that element "@GenePage.summary_synonyms" contains the text "p53"
        Then  I expect that element "@GenePage.summary_type" contains the text "protein_coding"
        Then  I expect that element "@GenePage.summary_location" contains the text "chr17:7661779-7687550 (GRCh38)"
        Then  I expect that element "@GenePage.summary_description" contains the text "This gene encodes a tumor"

        Then  I expect that element "@GenePage.external_references_section" contains the text "External References"
        Then  I expect that element "@GenePage.external_references_entrez_gene" contains the text "7157"
        Then  I expect that element "@GenePage.external_references_uniprotkb_swissprot" contains the text "P04637"
        Then  I expect that element "@GenePage.external_references_hgnc" contains the text "HGNC:11998"
        Then  I expect that element "@GenePage.external_references_omim_gene" contains the text "191170"
        Then  I expect that element "@GenePage.external_references_ensembl" contains the text "ENSG00000141510"
