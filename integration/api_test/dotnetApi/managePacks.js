describe("Manage Packs - Get image pack details", function () {
  const purchasedImagePacksApi = `${Cypress.env("baseurl")}${Cypress.env(
    "purchasedImagePacksApi"
  )}`;
  it("Image Pack : en - To get all the purchased image pack details", () => {
    cy.request(
      `${purchasedImagePacksApi}?customerId=220241E3-294F-4B60-919F-1DFC595B7BFA&currency=GBP&langCode=en`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.equal(true);
      expect(response.body.data[0]).to.deep.contains({
        packageId: "71290a7a-a895-ea11-8a6d-90b11c55b1bc",
        packageName_en: "Personal use",
        packageName: "Personal use",
        packageDescription:
          "Personal prints, cards and gifts, or reference for artists. Non-commercial use only, not for resale.",
        accountNumber: "DPAUGBP",
        isCustomPack: false,
        licenseId: "7813f391-338b-4015-987b-0c0c96d355a8",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: true,
        productType: "image",
        licenseType: "rf",
        pictureType: "photograph,illustration",
        usageRestrictions: "99z",
        resolutionType: "",
        pond5LicenseType: "",
      });

      expect(response.body.data[1]).to.deep.contains({
        packageId: "71290a7a-a895-ea11-8a6d-90b11c55b1bc",
        packageName_en: "Personal use",
        packageName: "Personal use",
        packageDescription:
          "Personal prints, cards and gifts, or reference for artists. Non-commercial use only, not for resale.",
        accountNumber: "DPAUGBP",
        isCustomPack: false,
        licenseId: "4f981c18-7c27-4e56-813c-c62671fa6872",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: false,
        productType: "image",
        licenseType: "rf",
        pictureType: "photograph,illustration",
        usageRestrictions: "99z",
        resolutionType: "",
        pond5LicenseType: "",
      });
      expect(response.body.data[2]).to.deep.contains({
        packageId: "71290a7a-a895-ea11-8a6d-90b11c55b1bc",
        packageName_en: "Personal use",
        packageName: "Personal use",
        packageDescription:
          "Personal prints, cards and gifts, or reference for artists. Non-commercial use only, not for resale.",
        accountNumber: "DPAUGBP",
        isCustomPack: false,
        licenseId: "4c292e2b-f81a-47d0-a539-fa7d3c9c0fe1",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: false,
        productType: "image",
        licenseType: "rm",
        pictureType: "photograph,illustration",
        usageRestrictions: "99z",
        resolutionType: "",
        pond5LicenseType: "",
      });
      expect(response.body.data[3]).to.deep.contains({
        packageId: "71290a7a-a895-ea11-8a6d-90b11c55b1bc",
        packageName_en: "Personal use",
        packageName: "Personal use",
        packageDescription:
          "Personal prints, cards and gifts, or reference for artists. Non-commercial use only, not for resale.",
        accountNumber: "DPAUGBP",
        isCustomPack: false,
        licenseId: "7813f391-338b-4015-987b-0c0c96d355a8",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: true,
        productType: "image",
        licenseType: "rm",
        pictureType: "photograph,illustration",
        usageRestrictions: "99z",
        resolutionType: "",
        pond5LicenseType: "",
      });

      expect(response.body.data[4]).to.deep.contains({
        packageId: "bce36789-324c-ec11-8101-00155d102b26",
        packageName_en: "HD - Standard",
        packageName: "HD - Standard",
        packageDescription: "Web & social media – single project",
        accountNumber: "DPAUGBP",
        isCustomPack: false,
        licenseId: "8dec3224-22d8-4c43-9f4c-3bbe1a6de3d9",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: false,
        productType: "video",
        licenseType: "rf",
        pictureType: "",
        usageRestrictions: "",
        resolutionType: "hd",
        pond5LicenseType: "standard",
      });

      expect(response.body.data[5]).to.deep.contains({
        packageId: "0a64ecb0-11a4-ec11-8101-00155d102b26",
        packageName_en: "Marketing package",
        packageName: "Marketing package",
        packageDescription:
          "Use in a single marketing campaign, worldwide (excludes advertising). This package is for a marketing campaign for promoting a business.",
        accountNumber: "DPUKGBP",
        isCustomPack: false,
        licenseId: "90c2c777-9c42-4643-aad5-cb955d050508",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: false,
        productType: "image",
        licenseType: "rf",
        pictureType: "photograph,illustration",
        usageRestrictions: "",
        resolutionType: "",
        pond5LicenseType: "",
      });
      expect(response.body.data[6]).to.deep.contains({
        packageId: "0a64ecb0-11a4-ec11-8101-00155d102b26",
        packageName_en: "Marketing package",
        packageName: "Marketing package",
        packageDescription:
          "Use in a single marketing campaign, worldwide (excludes advertising). This package is for a marketing campaign for promoting a business.",
        accountNumber: "DPUKGBP",
        isCustomPack: false,
        licenseId: "7e9bef8a-d173-49e2-8456-02b1217d52d2",
        excludedForRfEditorial: false,
        isRfOnly: false,
        isEditorial: false,
        productType: "image",
        licenseType: "rm",
        pictureType: "photograph,illustration",
        usageRestrictions: "",
        resolutionType: "",
        pond5LicenseType: "",
      });
    });
  });
  it("Image Pack : en - Unauthorized ", () => {
    cy.request(
      `${purchasedImagePacksApi}?customerId=522CBDB9-6EC3-42DF-A542&currency=GBP&langCode=en`
    ).as("comments");
    cy.get("@comments").should((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.success).to.equal(false);
      expect(response.body.error).to.deep.equals({
        code: 401,
        type: "Unauthorized",
      });
    });
  });
});
