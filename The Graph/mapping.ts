import {
  BillingCreated as BillingCreatedEvent,
  BillingMethodCreated as BillingMethodCreatedEvent,
  ExtraServiceCreated as ExtraServiceCreatedEvent,
  LicenseCreated as LicenseCreatedEvent,
  RevisionReportCreated as RevisionReportCreatedEvent,
  SLACreated as SLACreatedEvent,
  ServiceCreated as ServiceCreatedEvent,
  ServiceSpaceCreated as ServiceSpaceCreatedEvent
} from "../generated/Slink/Slink"
import {
  Billing,
  BillingMethod,
  ExtraService,
  License,
  RevisionReport,
  SLA,
  Service,
  ServiceSpace
} from "../generated/schema"

export function handleBillingCreated(event: BillingCreatedEvent): void {
  let entity = new Billing(event.params.id.toString())
  entity.name = event.params.name
  entity.save()
}

export function handleBillingMethodCreated(
  event: BillingMethodCreatedEvent
): void {
  let entity = new BillingMethod(event.params.id.toString())
  entity.name = event.params.name
  entity.save()
}

export function handleExtraServiceCreated(
  event: ExtraServiceCreatedEvent
): void {
  let entity = new ExtraService(event.params.id.toString())
  entity.name = event.params.name
  entity.description = event.params.description
  entity.save()
}

export function handleLicenseCreated(event: LicenseCreatedEvent): void {
  let entity = new License(event.params.id.toString())
  entity.name = event.params.name
  entity.save()
}

export function handleRevisionReportCreated(
  event: RevisionReportCreatedEvent
): void {
  let entity = new RevisionReport(event.params.id.toString())
  entity.name = event.params.name
  entity.save()
}

export function handleSLACreated(event: SLACreatedEvent): void {
  let entity = new SLA(event.params.slaId.toString())
  entity.customer = event.params.customer
  entity.creationDate = event.block.timestamp
  entity.startDate = event.params.startDate
  entity.automaticRenewal = event.params.automaticRenewal
  entity.service = event.params.service.toString()
  entity.extraService = event.params.extraService.toString()
  entity.serviceSpace = event.params.serviceSpace.toString()
  entity.license = event.params.license.toString()
  entity.revisionReport = event.params.revisionReport.toString()
  entity.billing = event.params.billing.toString()
  entity.billingMethod = event.params.billingMethod.toString()
  entity.totalPrice = event.params.totalPrice
  entity.save()
}

export function handleServiceCreated(event: ServiceCreatedEvent): void {
  let entity = new Service(event.params.id.toString())
  entity.name = event.params.name
  entity.description = event.params.description
  entity.save()
}

export function handleServiceSpaceCreated(
  event: ServiceSpaceCreatedEvent
): void {
  let entity = new ServiceSpace(event.params.id.toString())
  entity.name = event.params.name
  entity.startTime = event.params.startTime
  entity.endTime = event.params.endTime
  entity.save()
}