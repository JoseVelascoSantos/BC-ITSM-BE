pragma solidity >=0.4.4 < 0.7.0;
pragma experimental ABIEncoderV2;

// @title Slink
// @author Yule Zhang, José Andrés Velasco Santos

contract Slink {

    event ServiceCreated(uint id, string name, string description);
    event ExtraServiceCreated(uint id, string name, string description);
    event ServiceSpaceCreated(uint id, string name, string startTime, string endTime);
    event LicenseCreated(uint id, string name);
    event RevisionReportCreated(uint id, string name);
    event BillingCreated(uint id, string name);
    event BillingMethodCreated(uint id, string name);

    event SLACreated(
        uint slaId,
        address customer,
        uint startDate,
        bool automaticRenewal,
        uint service,
        uint extraService,
        uint serviceSpace,
        uint license,
        uint revisionReport,
        uint billing,
        uint billingMethod,
        uint totalPrice
    );

    struct Service {
        uint serviceId;
        string name;
        string description;
    }

    struct ServiceSpace {
        uint serviceSpaceId;
        string name;
        string startTime;
        string endTime;
    }

    struct License {
        uint licenseId;
        string name;
    }

    struct RevisionReport {
        uint revisionReportId;
        string name;
    }

    struct Billing {
        uint billingId;
        string name;
    }

    struct BillingMethod {
        uint billingMethodId;
        string name;
    }

    struct SLA {
        uint id;
        address customer;
        uint startDate;
        bool automaticRenewal;
        uint service;
        uint extraService;
        uint serviceSpace;
        uint license;
        uint revisionReport;
        uint billing;
        uint billingMethod;
        uint totalPrice;
    }

    address public provider;
    string public serviceLevel;

    mapping(uint => bool) private serviceIds;
    mapping(uint => Service) public services;

    mapping(uint => bool) private extraServiceIds;
    mapping(uint => Service) public extraServices;

    mapping(uint => bool) private serviceSpaceIds;
    mapping(uint => ServiceSpace) public serviceSpaces;

    mapping(uint => bool) private licenseIds;
    mapping(uint => License) public licenses;

    mapping(uint => bool) private revisionReportIds;
    mapping(uint => RevisionReport) public revisionReports;

    mapping(uint => bool) private billingIds;
    mapping(uint => Billing) public billings;

    mapping(uint => bool) private billingMethodIds;
    mapping(uint => BillingMethod) public billingMethods;

    mapping(uint => bool) private slaIDs;
    mapping(uint => SLA) private slas;

    constructor(string memory _serviceLevel) public {
        provider = msg.sender;
        serviceLevel = _serviceLevel;
    }

    function addService(Service memory service) external checkProvider checkNotExistService(service.serviceId) {
        serviceIds[service.serviceId] = true;
        services[service.serviceId] = service;
        emit ServiceCreated(service.serviceId, service.name, service.description);
    }

    function addExtraService(Service memory extraService) external checkProvider checkNotExistExtraService(extraService.serviceId) {
        extraServiceIds[extraService.serviceId] = true;
        extraServices[extraService.serviceId] = extraService;
        emit ExtraServiceCreated(extraService.serviceId, extraService.name, extraService.description);
    }

    function addServiceSpace(ServiceSpace memory serviceSpace) external checkProvider checkNotExistServiceSpace(serviceSpace.serviceSpaceId) {
        serviceSpaceIds[serviceSpace.serviceSpaceId] = true;
        serviceSpaces[serviceSpace.serviceSpaceId] = serviceSpace;
        emit ServiceSpaceCreated(serviceSpace.serviceSpaceId, serviceSpace.name, serviceSpace.startTime, serviceSpace.endTime);
    }

    function addLicense(License memory license) external checkProvider checkNotExistLicense(license.licenseId) {
        licenseIds[license.licenseId] = true;
        licenses[license.licenseId] = license;
        emit LicenseCreated(license.licenseId, license.name);
    }

    function addRevisionReport(RevisionReport memory revisionReport) external checkProvider checkNotExistRevisionReport(revisionReport.revisionReportId) {
        revisionReportIds[revisionReport.revisionReportId] = true;
        revisionReports[revisionReport.revisionReportId] = revisionReport;
        emit RevisionReportCreated(revisionReport.revisionReportId, revisionReport.name);
    }

    function addBilling(Billing memory billing) external checkProvider checkNotExistBilling(billing.billingId) {
        billingIds[billing.billingId] = true;
        billings[billing.billingId] = billing;
        emit BillingCreated(billing.billingId, billing.name);
    }

    function addBillingMethod(BillingMethod memory billingMethod) external checkProvider checkNotExistBillingMethod(billingMethod.billingMethodId) {
        billingMethodIds[billingMethod.billingMethodId] = true;
        billingMethods[billingMethod.billingMethodId] = billingMethod;
        emit BillingMethodCreated(billingMethod.billingMethodId, billingMethod.name);
    }

    function addSLA(SLA memory sla) external checkProvider checkNotExistID(sla.id) {
        slaIDs[sla.id] = true;
        slas[sla.id] = sla;
        emit SLACreated(
            sla.id,
            sla.customer,
            sla.startDate,
            sla.automaticRenewal,
            sla.service,
            sla.extraService,
            sla.serviceSpace,
            sla.license,
            sla.revisionReport,
            sla.billing,
            sla.billingMethod,
            sla.totalPrice
        );
    }

    function getSLA(uint id) view external checkExistID(id) returns(SLA memory) {
        return slas[id];
    }

    modifier checkProvider() {
        require(provider == msg.sender, "Unauthorized");
        _;
    }

    modifier checkExistID(uint id) {
        require(slaIDs[id], "SLA id not exist");
        _;
    }

    modifier checkNotExistID(uint id) {
        require(!slaIDs[id], "SLA id exist");
        _;
    }

    modifier checkNotExistService(uint id) {
        require(!serviceIds[id], "Service id exist");
        _;
    }

    modifier checkNotExistExtraService(uint id) {
        require(!extraServiceIds[id], "Extra service id exist");
        _;
    }

    modifier checkNotExistServiceSpace(uint id) {
        require(!serviceSpaceIds[id], "Service space id exist");
        _;
    }

    modifier checkNotExistLicense(uint id) {
        require(!licenseIds[id], "License id exist");
        _;
    }

    modifier checkNotExistRevisionReport(uint id) {
        require(!revisionReportIds[id], "Revision report id exist");
        _;
    }

    modifier checkNotExistBilling(uint id) {
        require(!billingIds[id], "Billing id exist");
        _;
    }

    modifier checkNotExistBillingMethod(uint id) {
        require(!billingMethodIds[id], "Billing method id exist");
        _;
    }

}
