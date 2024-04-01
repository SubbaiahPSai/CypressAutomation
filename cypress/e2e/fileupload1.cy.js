/// <reference types="cypress"/>


describe("file_uplaoad",()=>{
    it("file_upload",function(){
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
           // file upload
    //cy.get('[name="filesToUpload"]').selectFile(["cypress/fixtures/signature.jpg","cypress/fixtures/sai pic.jpg"])
    cy.get("[name='filesToUpload']").attachFile('cypress/fixtures/sai.data.json')

    })
    })
