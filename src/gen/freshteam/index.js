/**
 * Freshteam Public APIs
 * Freshteam public APIs
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@freshteam.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from "./ApiClient";
import Address from "./model/Address";
import Applicant from "./model/Applicant";
import Applicant1 from "./model/Applicant1";
import ApplicantCandidate from "./model/ApplicantCandidate";
import ApplicantComment from "./model/ApplicantComment";
import ApplicantCommentCreate from "./model/ApplicantCommentCreate";
import ApplicantCreate from "./model/ApplicantCreate";
import ApplicantCreateCandidate from "./model/ApplicantCreateCandidate";
import ApplicantDetail from "./model/ApplicantDetail";
import ApplicantDetailCandidate from "./model/ApplicantDetailCandidate";
import ApplicantDetailCandidateLocation from "./model/ApplicantDetailCandidateLocation";
import ApplicantDetailCandidateProfileLinks from "./model/ApplicantDetailCandidateProfileLinks";
import ApplicantDetailCandidateReferrals from "./model/ApplicantDetailCandidateReferrals";
import ApplicantDetailCandidateResumes from "./model/ApplicantDetailCandidateResumes";
import ApplicantDetailFollowers from "./model/ApplicantDetailFollowers";
import ApplicantEmail from "./model/ApplicantEmail";
import ApplicantEmailCreate from "./model/ApplicantEmailCreate";
import ApplicantField from "./model/ApplicantField";
import ApplicantUpdate from "./model/ApplicantUpdate";
import Attachment from "./model/Attachment";
import BonusType from "./model/BonusType";
import Branch from "./model/Branch";
import BusinessUnit from "./model/BusinessUnit";
import Candidate from "./model/Candidate";
import CandidateCreate from "./model/CandidateCreate";
import CandidateCreatePositions from "./model/CandidateCreatePositions";
import CandidatePositions from "./model/CandidatePositions";
import CandidateQualifications from "./model/CandidateQualifications";
import CompensationReason from "./model/CompensationReason";
import CostCenter from "./model/CostCenter";
import CustomField from "./model/CustomField";
import CustomRadioFields from "./model/CustomRadioFields";
import Department from "./model/Department";
import Employee from "./model/Employee";
import EmployeeAddress from "./model/EmployeeAddress";
import EmployeeAward from "./model/EmployeeAward";
import EmployeeBackGroundVerificationDetail from "./model/EmployeeBackGroundVerificationDetail";
import EmployeeBankAccount from "./model/EmployeeBankAccount";
import EmployeeBonus from "./model/EmployeeBonus";
import EmployeeCertificate from "./model/EmployeeCertificate";
import EmployeeCommunicationAddress from "./model/EmployeeCommunicationAddress";
import EmployeeCompensationDetail from "./model/EmployeeCompensationDetail";
import EmployeeCreate from "./model/EmployeeCreate";
import EmployeeCreateCustomFields from "./model/EmployeeCreateCustomFields";
import EmployeeDependent from "./model/EmployeeDependent";
import EmployeeDetail from "./model/EmployeeDetail";
import EmployeeDetailAddress from "./model/EmployeeDetailAddress";
import EmployeeDetailCommunicationAddress from "./model/EmployeeDetailCommunicationAddress";
import EmployeeDocumentType from "./model/EmployeeDocumentType";
import EmployeeEmergencyContact from "./model/EmployeeEmergencyContact";
import EmployeeField from "./model/EmployeeField";
import EmployeeFieldPicklistValues from "./model/EmployeeFieldPicklistValues";
import EmployeeFieldScopes from "./model/EmployeeFieldScopes";
import EmployeeFields from "./model/EmployeeFields";
import EmployeeGovernmentDocument from "./model/EmployeeGovernmentDocument";
import EmployeeHonor from "./model/EmployeeHonor";
import EmployeeLeaveType from "./model/EmployeeLeaveType";
import EmployeeLicense from "./model/EmployeeLicense";
import EmployeeLiteModel from "./model/EmployeeLiteModel";
import EmployeePhoneNumber from "./model/EmployeePhoneNumber";
import EmployeePosition from "./model/EmployeePosition";
import EmployeeQualification from "./model/EmployeeQualification";
import EmployeeReference from "./model/EmployeeReference";
import EmployeeSocialProfiles from "./model/EmployeeSocialProfiles";
import EmployeeStock from "./model/EmployeeStock";
import EmployeeTimeoff from "./model/EmployeeTimeoff";
import EmployeeWorkPhoneNumber from "./model/EmployeeWorkPhoneNumber";
import FieldOption from "./model/FieldOption";
import GrantType from "./model/GrantType";
import InlineResponse400 from "./model/InlineResponse400";
import InlineResponse401 from "./model/InlineResponse401";
import InlineResponse403 from "./model/InlineResponse403";
import InlineResponse404 from "./model/InlineResponse404";
import InlineResponse422 from "./model/InlineResponse422";
import InlineResponse500 from "./model/InlineResponse500";
import InterviewDetail from "./model/InterviewDetail";
import InterviewProcess from "./model/InterviewProcess";
import Interviewer from "./model/Interviewer";
import Job from "./model/Job";
import JobDetail from "./model/JobDetail";
import JobDetailSalary from "./model/JobDetailSalary";
import JobField from "./model/JobField";
import JobSalary from "./model/JobSalary";
import LeaveRequest from "./model/LeaveRequest";
import LeaveRequest1 from "./model/LeaveRequest1";
import LeaveRequestCreate from "./model/LeaveRequestCreate";
import LeaveType from "./model/LeaveType";
import Level from "./model/Level";
import Model400Error from "./model/Model400Error";
import Model401Error from "./model/Model401Error";
import Model403Error from "./model/Model403Error";
import Model404Error from "./model/Model404Error";
import Model422Error from "./model/Model422Error";
import Model500Error from "./model/Model500Error";
import NewHire from "./model/NewHire";
import NewHireCreate from "./model/NewHireCreate";
import NewHireCreateCustomFields from "./model/NewHireCreateCustomFields";
import NewHireDetail from "./model/NewHireDetail";
import PayGroup from "./model/PayGroup";
import PayMethod from "./model/PayMethod";
import PayRate from "./model/PayRate";
import PaySchedule from "./model/PaySchedule";
import Requisitions from "./model/Requisitions";
import Role from "./model/Role";
import Source from "./model/Source";
import SourceCategory from "./model/SourceCategory";
import SourceCreate from "./model/SourceCreate";
import StockGrantReason from "./model/StockGrantReason";
import SubDepartment from "./model/SubDepartment";
import SubStages from "./model/SubStages";
import Team from "./model/Team";
import UserFunction from "./model/UserFunction";
import UserLite from "./model/UserLite";
import VariablePayFrequency from "./model/VariablePayFrequency";
import WorkHourRate from "./model/WorkHourRate";
import ApplicantApi from "./api/ApplicantApi";
import ApplicantCommentApi from "./api/ApplicantCommentApi";
import ApplicantEmailApi from "./api/ApplicantEmailApi";
import BusinessUnitsApi from "./api/BusinessUnitsApi";
import CandidateApi from "./api/CandidateApi";
import DepartmentsApi from "./api/DepartmentsApi";
import EmployeeApi from "./api/EmployeeApi";
import EmployeeFieldsApi from "./api/EmployeeFieldsApi";
import InterviewApi from "./api/InterviewApi";
import JobApi from "./api/JobApi";
import JobFieldsApi from "./api/JobFieldsApi";
import LevelsApi from "./api/LevelsApi";
import LocationsApi from "./api/LocationsApi";
import NewHireApi from "./api/NewHireApi";
import RolesApi from "./api/RolesApi";
import SourceApi from "./api/SourceApi";
import SourceCategoriesApi from "./api/SourceCategoriesApi";
import SourcesApi from "./api/SourcesApi";
import SubDepartmentsApi from "./api/SubDepartmentsApi";
import TeamsApi from "./api/TeamsApi";
import TimeoffApi from "./api/TimeoffApi";
import UserFunctionsApi from "./api/UserFunctionsApi";

/**
 * Auto-generated JavaScript client code from Freshteam OpenAPI spec using OpenAPI Generator.<br>
 * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
 * <p>
 * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
 * <pre>
 * var FreshteamApiSdkCodegen = require('index'); // See note below*.
 * var xxxSvc = new FreshteamApiSdkCodegen.XxxApi(); // Allocate the API class we're going to use.
 * var yyyModel = new FreshteamApiSdkCodegen.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
 * and put the application logic within the callback function.</em>
 * </p>
 * <p>
 * A non-AMD browser application (discouraged) might do something like this:
 * <pre>
 * var xxxSvc = new FreshteamApiSdkCodegen.XxxApi(); // Allocate the API class we're going to use.
 * var yyy = new FreshteamApiSdkCodegen.Yyy(); // Construct a model instance.
 * yyyModel.someProperty = 'someValue';
 * ...
 * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
 * ...
 * </pre>
 * </p>
 * @module index
 * @version 1.0.0
 */
export {
  /**
   * The ApiClient constructor.
   * @property {module:ApiClient}
   */
  ApiClient,
  /**
   * The Address model constructor.
   * @property {module:model/Address}
   */
  Address,
  /**
   * The Applicant model constructor.
   * @property {module:model/Applicant}
   */
  Applicant,
  /**
   * The Applicant1 model constructor.
   * @property {module:model/Applicant1}
   */
  Applicant1,
  /**
   * The ApplicantCandidate model constructor.
   * @property {module:model/ApplicantCandidate}
   */
  ApplicantCandidate,
  /**
   * The ApplicantComment model constructor.
   * @property {module:model/ApplicantComment}
   */
  ApplicantComment,
  /**
   * The ApplicantCommentCreate model constructor.
   * @property {module:model/ApplicantCommentCreate}
   */
  ApplicantCommentCreate,
  /**
   * The ApplicantCreate model constructor.
   * @property {module:model/ApplicantCreate}
   */
  ApplicantCreate,
  /**
   * The ApplicantCreateCandidate model constructor.
   * @property {module:model/ApplicantCreateCandidate}
   */
  ApplicantCreateCandidate,
  /**
   * The ApplicantDetail model constructor.
   * @property {module:model/ApplicantDetail}
   */
  ApplicantDetail,
  /**
   * The ApplicantDetailCandidate model constructor.
   * @property {module:model/ApplicantDetailCandidate}
   */
  ApplicantDetailCandidate,
  /**
   * The ApplicantDetailCandidateLocation model constructor.
   * @property {module:model/ApplicantDetailCandidateLocation}
   */
  ApplicantDetailCandidateLocation,
  /**
   * The ApplicantDetailCandidateProfileLinks model constructor.
   * @property {module:model/ApplicantDetailCandidateProfileLinks}
   */
  ApplicantDetailCandidateProfileLinks,
  /**
   * The ApplicantDetailCandidateReferrals model constructor.
   * @property {module:model/ApplicantDetailCandidateReferrals}
   */
  ApplicantDetailCandidateReferrals,
  /**
   * The ApplicantDetailCandidateResumes model constructor.
   * @property {module:model/ApplicantDetailCandidateResumes}
   */
  ApplicantDetailCandidateResumes,
  /**
   * The ApplicantDetailFollowers model constructor.
   * @property {module:model/ApplicantDetailFollowers}
   */
  ApplicantDetailFollowers,
  /**
   * The ApplicantEmail model constructor.
   * @property {module:model/ApplicantEmail}
   */
  ApplicantEmail,
  /**
   * The ApplicantEmailCreate model constructor.
   * @property {module:model/ApplicantEmailCreate}
   */
  ApplicantEmailCreate,
  /**
   * The ApplicantField model constructor.
   * @property {module:model/ApplicantField}
   */
  ApplicantField,
  /**
   * The ApplicantUpdate model constructor.
   * @property {module:model/ApplicantUpdate}
   */
  ApplicantUpdate,
  /**
   * The Attachment model constructor.
   * @property {module:model/Attachment}
   */
  Attachment,
  /**
   * The BonusType model constructor.
   * @property {module:model/BonusType}
   */
  BonusType,
  /**
   * The Branch model constructor.
   * @property {module:model/Branch}
   */
  Branch,
  /**
   * The BusinessUnit model constructor.
   * @property {module:model/BusinessUnit}
   */
  BusinessUnit,
  /**
   * The Candidate model constructor.
   * @property {module:model/Candidate}
   */
  Candidate,
  /**
   * The CandidateCreate model constructor.
   * @property {module:model/CandidateCreate}
   */
  CandidateCreate,
  /**
   * The CandidateCreatePositions model constructor.
   * @property {module:model/CandidateCreatePositions}
   */
  CandidateCreatePositions,
  /**
   * The CandidatePositions model constructor.
   * @property {module:model/CandidatePositions}
   */
  CandidatePositions,
  /**
   * The CandidateQualifications model constructor.
   * @property {module:model/CandidateQualifications}
   */
  CandidateQualifications,
  /**
   * The CompensationReason model constructor.
   * @property {module:model/CompensationReason}
   */
  CompensationReason,
  /**
   * The CostCenter model constructor.
   * @property {module:model/CostCenter}
   */
  CostCenter,
  /**
   * The CustomField model constructor.
   * @property {module:model/CustomField}
   */
  CustomField,
  /**
   * The CustomRadioFields model constructor.
   * @property {module:model/CustomRadioFields}
   */
  CustomRadioFields,
  /**
   * The Department model constructor.
   * @property {module:model/Department}
   */
  Department,
  /**
   * The Employee model constructor.
   * @property {module:model/Employee}
   */
  Employee,
  /**
   * The EmployeeAddress model constructor.
   * @property {module:model/EmployeeAddress}
   */
  EmployeeAddress,
  /**
   * The EmployeeAward model constructor.
   * @property {module:model/EmployeeAward}
   */
  EmployeeAward,
  /**
   * The EmployeeBackGroundVerificationDetail model constructor.
   * @property {module:model/EmployeeBackGroundVerificationDetail}
   */
  EmployeeBackGroundVerificationDetail,
  /**
   * The EmployeeBankAccount model constructor.
   * @property {module:model/EmployeeBankAccount}
   */
  EmployeeBankAccount,
  /**
   * The EmployeeBonus model constructor.
   * @property {module:model/EmployeeBonus}
   */
  EmployeeBonus,
  /**
   * The EmployeeCertificate model constructor.
   * @property {module:model/EmployeeCertificate}
   */
  EmployeeCertificate,
  /**
   * The EmployeeCommunicationAddress model constructor.
   * @property {module:model/EmployeeCommunicationAddress}
   */
  EmployeeCommunicationAddress,
  /**
   * The EmployeeCompensationDetail model constructor.
   * @property {module:model/EmployeeCompensationDetail}
   */
  EmployeeCompensationDetail,
  /**
   * The EmployeeCreate model constructor.
   * @property {module:model/EmployeeCreate}
   */
  EmployeeCreate,
  /**
   * The EmployeeCreateCustomFields model constructor.
   * @property {module:model/EmployeeCreateCustomFields}
   */
  EmployeeCreateCustomFields,
  /**
   * The EmployeeDependent model constructor.
   * @property {module:model/EmployeeDependent}
   */
  EmployeeDependent,
  /**
   * The EmployeeDetail model constructor.
   * @property {module:model/EmployeeDetail}
   */
  EmployeeDetail,
  /**
   * The EmployeeDetailAddress model constructor.
   * @property {module:model/EmployeeDetailAddress}
   */
  EmployeeDetailAddress,
  /**
   * The EmployeeDetailCommunicationAddress model constructor.
   * @property {module:model/EmployeeDetailCommunicationAddress}
   */
  EmployeeDetailCommunicationAddress,
  /**
   * The EmployeeDocumentType model constructor.
   * @property {module:model/EmployeeDocumentType}
   */
  EmployeeDocumentType,
  /**
   * The EmployeeEmergencyContact model constructor.
   * @property {module:model/EmployeeEmergencyContact}
   */
  EmployeeEmergencyContact,
  /**
   * The EmployeeField model constructor.
   * @property {module:model/EmployeeField}
   */
  EmployeeField,
  /**
   * The EmployeeFieldPicklistValues model constructor.
   * @property {module:model/EmployeeFieldPicklistValues}
   */
  EmployeeFieldPicklistValues,
  /**
   * The EmployeeFieldScopes model constructor.
   * @property {module:model/EmployeeFieldScopes}
   */
  EmployeeFieldScopes,
  /**
   * The EmployeeFields model constructor.
   * @property {module:model/EmployeeFields}
   */
  EmployeeFields,
  /**
   * The EmployeeGovernmentDocument model constructor.
   * @property {module:model/EmployeeGovernmentDocument}
   */
  EmployeeGovernmentDocument,
  /**
   * The EmployeeHonor model constructor.
   * @property {module:model/EmployeeHonor}
   */
  EmployeeHonor,
  /**
   * The EmployeeLeaveType model constructor.
   * @property {module:model/EmployeeLeaveType}
   */
  EmployeeLeaveType,
  /**
   * The EmployeeLicense model constructor.
   * @property {module:model/EmployeeLicense}
   */
  EmployeeLicense,
  /**
   * The EmployeeLiteModel model constructor.
   * @property {module:model/EmployeeLiteModel}
   */
  EmployeeLiteModel,
  /**
   * The EmployeePhoneNumber model constructor.
   * @property {module:model/EmployeePhoneNumber}
   */
  EmployeePhoneNumber,
  /**
   * The EmployeePosition model constructor.
   * @property {module:model/EmployeePosition}
   */
  EmployeePosition,
  /**
   * The EmployeeQualification model constructor.
   * @property {module:model/EmployeeQualification}
   */
  EmployeeQualification,
  /**
   * The EmployeeReference model constructor.
   * @property {module:model/EmployeeReference}
   */
  EmployeeReference,
  /**
   * The EmployeeSocialProfiles model constructor.
   * @property {module:model/EmployeeSocialProfiles}
   */
  EmployeeSocialProfiles,
  /**
   * The EmployeeStock model constructor.
   * @property {module:model/EmployeeStock}
   */
  EmployeeStock,
  /**
   * The EmployeeTimeoff model constructor.
   * @property {module:model/EmployeeTimeoff}
   */
  EmployeeTimeoff,
  /**
   * The EmployeeWorkPhoneNumber model constructor.
   * @property {module:model/EmployeeWorkPhoneNumber}
   */
  EmployeeWorkPhoneNumber,
  /**
   * The FieldOption model constructor.
   * @property {module:model/FieldOption}
   */
  FieldOption,
  /**
   * The GrantType model constructor.
   * @property {module:model/GrantType}
   */
  GrantType,
  /**
   * The InlineResponse400 model constructor.
   * @property {module:model/InlineResponse400}
   */
  InlineResponse400,
  /**
   * The InlineResponse401 model constructor.
   * @property {module:model/InlineResponse401}
   */
  InlineResponse401,
  /**
   * The InlineResponse403 model constructor.
   * @property {module:model/InlineResponse403}
   */
  InlineResponse403,
  /**
   * The InlineResponse404 model constructor.
   * @property {module:model/InlineResponse404}
   */
  InlineResponse404,
  /**
   * The InlineResponse422 model constructor.
   * @property {module:model/InlineResponse422}
   */
  InlineResponse422,
  /**
   * The InlineResponse500 model constructor.
   * @property {module:model/InlineResponse500}
   */
  InlineResponse500,
  /**
   * The InterviewDetail model constructor.
   * @property {module:model/InterviewDetail}
   */
  InterviewDetail,
  /**
   * The InterviewProcess model constructor.
   * @property {module:model/InterviewProcess}
   */
  InterviewProcess,
  /**
   * The Interviewer model constructor.
   * @property {module:model/Interviewer}
   */
  Interviewer,
  /**
   * The Job model constructor.
   * @property {module:model/Job}
   */
  Job,
  /**
   * The JobDetail model constructor.
   * @property {module:model/JobDetail}
   */
  JobDetail,
  /**
   * The JobDetailSalary model constructor.
   * @property {module:model/JobDetailSalary}
   */
  JobDetailSalary,
  /**
   * The JobField model constructor.
   * @property {module:model/JobField}
   */
  JobField,
  /**
   * The JobSalary model constructor.
   * @property {module:model/JobSalary}
   */
  JobSalary,
  /**
   * The LeaveRequest model constructor.
   * @property {module:model/LeaveRequest}
   */
  LeaveRequest,
  /**
   * The LeaveRequest1 model constructor.
   * @property {module:model/LeaveRequest1}
   */
  LeaveRequest1,
  /**
   * The LeaveRequestCreate model constructor.
   * @property {module:model/LeaveRequestCreate}
   */
  LeaveRequestCreate,
  /**
   * The LeaveType model constructor.
   * @property {module:model/LeaveType}
   */
  LeaveType,
  /**
   * The Level model constructor.
   * @property {module:model/Level}
   */
  Level,
  /**
   * The Model400Error model constructor.
   * @property {module:model/Model400Error}
   */
  Model400Error,
  /**
   * The Model401Error model constructor.
   * @property {module:model/Model401Error}
   */
  Model401Error,
  /**
   * The Model403Error model constructor.
   * @property {module:model/Model403Error}
   */
  Model403Error,
  /**
   * The Model404Error model constructor.
   * @property {module:model/Model404Error}
   */
  Model404Error,
  /**
   * The Model422Error model constructor.
   * @property {module:model/Model422Error}
   */
  Model422Error,
  /**
   * The Model500Error model constructor.
   * @property {module:model/Model500Error}
   */
  Model500Error,
  /**
   * The NewHire model constructor.
   * @property {module:model/NewHire}
   */
  NewHire,
  /**
   * The NewHireCreate model constructor.
   * @property {module:model/NewHireCreate}
   */
  NewHireCreate,
  /**
   * The NewHireCreateCustomFields model constructor.
   * @property {module:model/NewHireCreateCustomFields}
   */
  NewHireCreateCustomFields,
  /**
   * The NewHireDetail model constructor.
   * @property {module:model/NewHireDetail}
   */
  NewHireDetail,
  /**
   * The PayGroup model constructor.
   * @property {module:model/PayGroup}
   */
  PayGroup,
  /**
   * The PayMethod model constructor.
   * @property {module:model/PayMethod}
   */
  PayMethod,
  /**
   * The PayRate model constructor.
   * @property {module:model/PayRate}
   */
  PayRate,
  /**
   * The PaySchedule model constructor.
   * @property {module:model/PaySchedule}
   */
  PaySchedule,
  /**
   * The Requisitions model constructor.
   * @property {module:model/Requisitions}
   */
  Requisitions,
  /**
   * The Role model constructor.
   * @property {module:model/Role}
   */
  Role,
  /**
   * The Source model constructor.
   * @property {module:model/Source}
   */
  Source,
  /**
   * The SourceCategory model constructor.
   * @property {module:model/SourceCategory}
   */
  SourceCategory,
  /**
   * The SourceCreate model constructor.
   * @property {module:model/SourceCreate}
   */
  SourceCreate,
  /**
   * The StockGrantReason model constructor.
   * @property {module:model/StockGrantReason}
   */
  StockGrantReason,
  /**
   * The SubDepartment model constructor.
   * @property {module:model/SubDepartment}
   */
  SubDepartment,
  /**
   * The SubStages model constructor.
   * @property {module:model/SubStages}
   */
  SubStages,
  /**
   * The Team model constructor.
   * @property {module:model/Team}
   */
  Team,
  /**
   * The UserFunction model constructor.
   * @property {module:model/UserFunction}
   */
  UserFunction,
  /**
   * The UserLite model constructor.
   * @property {module:model/UserLite}
   */
  UserLite,
  /**
   * The VariablePayFrequency model constructor.
   * @property {module:model/VariablePayFrequency}
   */
  VariablePayFrequency,
  /**
   * The WorkHourRate model constructor.
   * @property {module:model/WorkHourRate}
   */
  WorkHourRate,
  /**
   * The ApplicantApi service constructor.
   * @property {module:api/ApplicantApi}
   */
  ApplicantApi,
  /**
   * The ApplicantCommentApi service constructor.
   * @property {module:api/ApplicantCommentApi}
   */
  ApplicantCommentApi,
  /**
   * The ApplicantEmailApi service constructor.
   * @property {module:api/ApplicantEmailApi}
   */
  ApplicantEmailApi,
  /**
   * The BusinessUnitsApi service constructor.
   * @property {module:api/BusinessUnitsApi}
   */
  BusinessUnitsApi,
  /**
   * The CandidateApi service constructor.
   * @property {module:api/CandidateApi}
   */
  CandidateApi,
  /**
   * The DepartmentsApi service constructor.
   * @property {module:api/DepartmentsApi}
   */
  DepartmentsApi,
  /**
   * The EmployeeApi service constructor.
   * @property {module:api/EmployeeApi}
   */
  EmployeeApi,
  /**
   * The EmployeeFieldsApi service constructor.
   * @property {module:api/EmployeeFieldsApi}
   */
  EmployeeFieldsApi,
  /**
   * The InterviewApi service constructor.
   * @property {module:api/InterviewApi}
   */
  InterviewApi,
  /**
   * The JobApi service constructor.
   * @property {module:api/JobApi}
   */
  JobApi,
  /**
   * The JobFieldsApi service constructor.
   * @property {module:api/JobFieldsApi}
   */
  JobFieldsApi,
  /**
   * The LevelsApi service constructor.
   * @property {module:api/LevelsApi}
   */
  LevelsApi,
  /**
   * The LocationsApi service constructor.
   * @property {module:api/LocationsApi}
   */
  LocationsApi,
  /**
   * The NewHireApi service constructor.
   * @property {module:api/NewHireApi}
   */
  NewHireApi,
  /**
   * The RolesApi service constructor.
   * @property {module:api/RolesApi}
   */
  RolesApi,
  /**
   * The SourceApi service constructor.
   * @property {module:api/SourceApi}
   */
  SourceApi,
  /**
   * The SourceCategoriesApi service constructor.
   * @property {module:api/SourceCategoriesApi}
   */
  SourceCategoriesApi,
  /**
   * The SourcesApi service constructor.
   * @property {module:api/SourcesApi}
   */
  SourcesApi,
  /**
   * The SubDepartmentsApi service constructor.
   * @property {module:api/SubDepartmentsApi}
   */
  SubDepartmentsApi,
  /**
   * The TeamsApi service constructor.
   * @property {module:api/TeamsApi}
   */
  TeamsApi,
  /**
   * The TimeoffApi service constructor.
   * @property {module:api/TimeoffApi}
   */
  TimeoffApi,
  /**
   * The UserFunctionsApi service constructor.
   * @property {module:api/UserFunctionsApi}
   */
  UserFunctionsApi
};
