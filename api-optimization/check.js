/**
 * ! SELECT FACILITY PAGE
 * url-1 : https://staging-sc.next-api.arcapps.org/sc-api/countries - 1 time
 * url-2 : https://staging-sc.next-api.arcapps.org/sc-api/provinces - 2 times
 * url-3 : https://staging-sc.next-api.arcapps.org/sc-api/user-account/User-access-by-username/Administrator - 1 times
 * url-4 : https://staging-sc.next-api.arcapps.org/sc-api/user-account/key/5d52149a-5a3b-4238-ab50-728d1d8c1c93 - 1 time
 *
 * @description district by province call every changes and initially two times when page load
 */

/**
 * ! SEARCH CLIENT PAGE
 * ! check this api..  this is calling from different places... fix it latter
 * url-1 : https://staging-sc.next-api.arcapps.org/sc-api/user-account/key/5d52149a-5a3b-4238-ab50-728d1d8c1c93 - 2 times
 *
 * @description extra apis call when page load. Following apis are called when page load
 * url-2 : https://staging-sc.next-api.arcapps.org/sc-api/home-languages - 1 time
 * url-3 : https://staging-sc.next-api.arcapps.org/sc-api/districts - 1 time
 * url-4 : https://staging-sc.next-api.arcapps.org/sc-api/education-levels - 1 time
 * url-5 : https://staging-sc.next-api.arcapps.org/sc-api/countries - 2 time
 * url-6 : https://staging-sc.next-api.arcapps.org/sc-api/provinces - 1 time
 * url-7 : https://staging-sc.next-api.arcapps.org/sc-api/occupations - 1 time
 * url-8 : https://staging-sc.next-api.arcapps.org/sc-api/drug-classes - 1 time
 * url-9 : https://staging-sc.next-api.arcapps.org/sc-api/drug-subclasses - 1 time
 * url-10 : https://staging-sc.next-api.arcapps.org/sc-api/drug-Regimens - 1 time
 * url-11 : https://staging-sc.next-api.arcapps.org/sc-api/user-accounts - 1 time
 * url-12 : https://staging-sc.next-api.arcapps.org/sc-api/facility-accesses - 1 time
 * url-13 : https://staging-sc.next-api.arcapps.org/sc-api/diagnosis/load-ntg-level-2 - 1 time
 * url-14 : https://staging-sc.next-api.arcapps.org/sc-api/diagnosis/load-ntg-level-3 - 1 time
 * url-15 : https://staging-sc.next-api.arcapps.org/sc-api/facility-access-with-module-access/key/9ae88d67-683c-4974-2657-08db9c7ca121 - 1 time
 *
 * @description why those two apis are called here
 * url-1 : https://staging-sc.next-api.arcapps.org/sc-api/death-record/by-client/c6361faa-8ec9-4ca0-939b-08db7f943430 - 1 time
 * url-2 : https://staging-sc.next-api.arcapps.org/sc-api/death-record/by-client/d9040190-5293-4718-2287-08dbdb8bcd79 - 1 time
 */

/**
 * ! SERVICE POINT PAGE
 * url-1 : https://staging-sc.next-api.arcapps.org/sc-api/opd-visit - 1 times
 * url-2 : https://staging-sc.next-api.arcapps.org/sc-api/facility-access-with-module-access/key/9ae88d67-683c-4974-2657-08db9c7ca121 - 25 times
 * url-3 : https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 *
 */

/**
 * ! FIRST LANDING TO MAIN MODULE
 * https://staging-sc.next-api.arcapps.org/sc-api/user-account/key/5d52149a-5a3b-4238-ab50-728d1d8c1c93 - 2 times
 * https://staging-sc.next-api.arcapps.org/sc-api/facility-access-with-module-access/key/9ae88d67-683c-4974-2657-08db9c7ca121 - 29 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 2 times
 * https://staging-sc.next-api.arcapps.org/sc-api/readhts/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/hiv-testing-reasons - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/service-points - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/hiv-not-testing-reasons - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/hts/Latest-hts-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vital/vital-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/diagnosis/last-encounter/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/treatment-plan/last-encounter/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/treatment-plan/last-encounter/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/Latest-prescription/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/investigation-by-client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/facilities - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/user-accounts - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/chief-complaints - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/treatment-plans - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/countries - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/home-languages - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/provinces - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/districts - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vaccine-types - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vaccines-doses - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vaccines - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/physical-systems - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/contraceptives - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/constitutional-symptoms - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/tb-symptoms - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/allergies - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/ntg-level-one-diagnoses - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/icd-diagnoses - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/pain-scales - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/drug-utilities - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/drug-classes - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/drug-subclasses - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/drug-Regimens - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/frequency-interval/by-time-intervals - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/frequency-interval-by-frequency - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/drug-routes - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/identified-allergy-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/medical-histories-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/system-examination/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/glasgow-coma-scale/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/treatment-plan/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/immunization-record/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/gyn-obs-history-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/feeding-history/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/childs-dev-history/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/birth-history/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/surgery/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/diagnosis/last-encounter/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/pain-record/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vmmc-service/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/facility-accesses - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/treatment-plan/last-encounter/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/system-examination/by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vital/vital-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/vital/Latest-vital-by-client/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 times
 */

/**
 * ! HTS PAGE
 * https://staging-sc.next-api.arcapps.org/sc-api/client-types - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/service-points - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/hiv-testing-reasons - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/hiv-not-testing-reasons - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/hiv-risk-factors - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/readhts/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/visit-types - 1 time
 * https://staging-sc.next-api.arcapps.org/sc-api/client/key/61f6fcdd-0c36-4889-ae89-08db70ea8441 - 1 time
 */
