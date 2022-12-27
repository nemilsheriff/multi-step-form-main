const pg1Count = document.querySelector('#side-bar-1');
const pg2Count = document.querySelector('#side-bar-2');
const pg3Count = document.querySelector('#side-bar-3');
const pg4Count = document.querySelector('#side-bar-4');

const formPg1 = document.querySelector('#form-step-1');
const formPg2 = document.querySelector('#form-step-2');
const formPg3 = document.querySelector('#form-step-3');
const formPg4 = document.querySelector('#form-step-4');
const formPg5 = document.querySelector('#form-step-5');

const page2error = document.querySelector('#step-2-error');

const pg1Next = document.querySelector('#pg-1-next');
const pg2Next = document.querySelector('#pg-2-next');
const pg3Next = document.querySelector('#pg-3-next');
const pg4Next = document.querySelector('#pg-4-next');

const pg2Back = document.querySelector('#pg-2-back');
const pg3Back = document.querySelector('#pg-3-back');
const pg4Back = document.querySelector('#pg-4-back');

const planArcade = document.querySelector('#plan-arcade');
const planAdvanced = document.querySelector('#plan-advanced');
const planPro = document.querySelector('#plan-pro');

const paymentSchedule = document.querySelector('#payment-type')
const arcadeMonthlyPrice = document.querySelector('#arcade-monthly-price');
const arcadeYearlyPrice = document.querySelector('#arcade-yearly-price');
const arcadeYearlyFree = document.querySelector('#arcade-yearly-free');
const advancedMonthlyPrice = document.querySelector('#advanced-monthly-price');
const advancedYearlyPrice = document.querySelector('#advanced-yearly-price');
const advancedYearlyFree = document.querySelector('#advanced-yearly-free');
const proMonthlyPrice = document.querySelector('#pro-monthly-price');
const proYearlyPrice = document.querySelector('#pro-yearly-price');
const proYearlyFree = document.querySelector('#pro-yearly-free');

const addOnMultiMonthly = document.querySelector('#addon-multi-monthly');
const addOnMultiYearly = document.querySelector('#addon-multi-yearly');
const addOnStorageMonthly = document.querySelector('#addon-storage-monthly');
const addOnStorageYearly = document.querySelector('#addon-storage-yearly');
const addOnPorfileMonthly = document.querySelector('#addon-profile-monthly');
const addOnProfileYearly = document.querySelector('#addon-profile-yearly');

const changePlanHyperLink = document.querySelector('#step4-change-plan');

const paymentTypeInput = document.querySelector('#payment-type');
paymentTypeInput.checked = false;

let selectedPlan;
let monthly = true;
let planMonthlyPrice;
let planAnnualPrice;

const planArcadeMonthlyFee = 9;
const planArcadeYearlyFee = 90;
const planAdvancedMonthlyFee = 12;
const planAdvancedYearlyFee = 120;
const planProMonthlyFee = 15;
const planProYearlyFee = 150;

let onlineServiceAddOn = false;
let largerStorageAddOn = false;
let customizeProfileAddOn = false;

const onlineService = document.querySelector('#online-service');
const largerStorage = document.querySelector('#larger-storage');
const customizeProfile = document.querySelector('#customize-profile');

onlineService.checked = false;
largerStorage.checked = false;
customizeProfile.checked = false;

const step4PlanContainer = document.querySelector('.container__steps__step-item__step4__plan__container');
const PlanInfoDiv = document.createElement('div');
const PlanNameDiv = document.createElement('div');
const PlanCostDiv = document.createElement('div');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error')
const phoneError = document.querySelector('#phone-error')

const moveFrom1To2 = () => {
      if (nameInput && nameInput.value && emailInput && emailInput.value && phoneInput && phoneInput.value) {
            pg1Count.classList.remove("active")
            pg2Count.classList.add("active")
            formPg1.classList.add("disabled")
            formPg2.classList.remove("disabled")
      }
      if (nameInput && nameInput.value) {
            if (!Object.values(nameError.classList).includes('disabled')) {
                  nameError.classList.add('disabled');
            }
            if (Object.values(nameInput.classList).includes('input-error')) {
                  nameInput.classList.remove('input-error');
            }
      } else {
            // console.log('false')
            if (Object.values(nameError.classList).includes('disabled')) {
                  nameError.classList.remove('disabled');
            }
            if (!Object.values(nameInput.classList).includes('input-error')) {
                  nameInput.classList.add('input-error');
            }
      }
      if (emailInput && emailInput.value) {
            // console.log('true')
            if (!Object.values(emailError.classList).includes('disabled')) {
                  emailError.classList.add('disabled');
            }
            if (Object.values(emailInput.classList).includes('input-error')) {
                  emailInput.classList.remove('input-error');
            }
      } else {
            // console.log('false')
            if (Object.values(emailError.classList).includes('disabled')) {
                  emailError.classList.remove('disabled');
            }
            if (!Object.values(emailInput.classList).includes('input-error')) {
                  emailInput.classList.add('input-error');
            }
      }
      if (phoneInput && phoneInput.value) {
            if (!Object.values(phoneError.classList).includes('disabled')) {
                  phoneError.classList.add('disabled');
            }
            if (Object.values(phoneInput.classList).includes('input-error')) {
                  phoneInput.classList.remove('input-error');
            }
      } else {
            // console.log('false')
            if (Object.values(phoneError.classList).includes('disabled')) {
                  phoneError.classList.remove('disabled');
            }
            if (!Object.values(phoneInput.classList).includes('input-error')) {
                  phoneInput.classList.add('input-error');
            }
      }
}

const checkIfNameIsValid = () => {
      if (nameInput && nameInput.value) {
            if (!Object.values(nameError.classList).includes('disabled')) {
                  nameError.classList.add('disabled');
            }
            if (Object.values(nameInput.classList).includes('input-error')) {
                  nameInput.classList.remove('input-error');
            }
      } else {
            if (Object.values(nameError.classList).includes('disabled')) {
                  nameError.classList.remove('disabled');
            }
            if (!Object.values(nameInput.classList).includes('input-error')) {
                  nameInput.classList.add('input-error');
            }
      }
}

const checkIfEmailIsValid = () => {
      if (emailInput && emailInput.value) {
            if (!Object.values(emailError.classList).includes('disabled')) {
                  emailError.classList.add('disabled');
            }
            if (Object.values(emailInput.classList).includes('input-error')) {
                  emailInput.classList.remove('input-error');
            }
      } else {
            if (Object.values(emailError.classList).includes('disabled')) {
                  emailError.classList.remove('disabled');
            }
            if (!Object.values(emailInput.classList).includes('input-error')) {
                  emailInput.classList.add('input-error');
            }
      }
}

const checkIfPhoneIsValid = () => {
      if (phoneInput && phoneInput.value) {
            if (!Object.values(phoneError.classList).includes('disabled')) {
                  phoneError.classList.add('disabled');
            }
            if (Object.values(phoneInput.classList).includes('input-error')) {
                  phoneInput.classList.remove('input-error');
            }
      } else {
            if (Object.values(phoneError.classList).includes('disabled')) {
                  phoneError.classList.remove('disabled');
            }
            if (!Object.values(phoneInput.classList).includes('input-error')) {
                  phoneInput.classList.add('input-error');
            }
      }
}

const moveFrom2To1 = () => {
      pg2Count.classList.remove("active")
      pg1Count.classList.add("active")
      formPg1.classList.remove("disabled")
      formPg2.classList.add("disabled")
}

const moveFrom2To3 = () => {
      if (selectedPlan === undefined) {
            page2error.classList.remove('disabled');
      } else {
            pg2Count.classList.remove("active")
            pg3Count.classList.add("active")
            formPg2.classList.add("disabled")
            formPg3.classList.remove("disabled")
      }
}

const moveFrom3To2 = () => {
      pg3Count.classList.remove("active")
      pg2Count.classList.add("active")
      formPg2.classList.remove("disabled")
      formPg3.classList.add("disabled")
}

const moveFrom3To4 = () => {
      let total = 0;
      pg3Count.classList.remove("active")
      pg4Count.classList.add("active")
      formPg3.classList.add("disabled")
      formPg4.classList.remove("disabled")
      PlanInfoDiv.classList.add('container__steps__step-item__step4__plan__info');
      PlanNameDiv.classList.add('container__steps__step-item__step4__plan__info__name');
      PlanCostDiv.classList.add('container__steps__step-item__step4__plan__info__cost');
      PlanInfoDiv.appendChild(PlanNameDiv);

      if (monthly) {
            let text = `${selectedPlan} (Monthly)`;
            let price = planMonthlyPrice;
            let priceText = `$${price}/mo`;
            total = total + planMonthlyPrice;
            PlanNameDiv.innerHTML = text;
            PlanCostDiv.innerHTML = priceText;

      } else {
            let text = `${selectedPlan} (Annual)`;
            let price = planAnnualPrice;
            let priceText = `$${price}/yr`
            total = total + planAnnualPrice;
            PlanNameDiv.innerHTML = text;
            PlanCostDiv.innerHTML = priceText;
      }

      PlanInfoDiv.appendChild(PlanCostDiv);
      step4PlanContainer.prepend(PlanInfoDiv)

      const addOnMainDiv = document.createElement('div');
      addOnMainDiv.classList.add('container__steps__step-item__step4__plan__addons');

      if (onlineServiceAddOn) {
            const addOnChildDiv = document.createElement('div');
            const addOnNameDiv = document.createElement('div');
            const addOnPriceDiv = document.createElement('div');

            addOnChildDiv.classList.add('container__steps__step-item__step4__plan__addons__item')
            addOnNameDiv.classList.add('container__steps__step-item__step4__plan__addons__item__name')
            addOnPriceDiv.classList.add('container__steps__step-item__step4__plan__addons__item__charge')

            if (monthly) {
                  addOnPriceDiv.textContent = '+$1/mo'
                  total = total + 1
            } else {
                  addOnPriceDiv.textContent = '+$10/yr'
                  total = total + 10
            }

            addOnNameDiv.textContent = 'Online service'
            addOnChildDiv.appendChild(addOnNameDiv);
            addOnChildDiv.appendChild(addOnPriceDiv);
            addOnMainDiv.appendChild(addOnChildDiv);
            step4PlanContainer.appendChild(addOnMainDiv);
      }

      if (largerStorageAddOn) {
            const addOnChildDiv = document.createElement('div');
            const addOnNameDiv = document.createElement('div');
            const addOnPriceDiv = document.createElement('div');

            addOnChildDiv.classList.add('container__steps__step-item__step4__plan__addons__item')
            addOnNameDiv.classList.add('container__steps__step-item__step4__plan__addons__item__name')
            addOnPriceDiv.classList.add('container__steps__step-item__step4__plan__addons__item__charge')

            if (monthly) {
                  addOnPriceDiv.textContent = '+$2/mo'
                  total = total + 2
            } else {
                  addOnPriceDiv.textContent = '+$20/yr'
                  total = total + 20
            }

            addOnNameDiv.textContent = 'Larger storage'
            addOnChildDiv.appendChild(addOnNameDiv);
            addOnChildDiv.appendChild(addOnPriceDiv);
            addOnMainDiv.appendChild(addOnChildDiv);
            step4PlanContainer.appendChild(addOnMainDiv);
      }

      if (customizeProfileAddOn) {
            const addOnChildDiv = document.createElement('div');
            const addOnNameDiv = document.createElement('div');
            const addOnPriceDiv = document.createElement('div');

            addOnChildDiv.classList.add('container__steps__step-item__step4__plan__addons__item')
            addOnNameDiv.classList.add('container__steps__step-item__step4__plan__addons__item__name')
            addOnPriceDiv.classList.add('container__steps__step-item__step4__plan__addons__item__charge')

            if (monthly) {
                  addOnPriceDiv.textContent = '+$2/mo'
                  total = total + 2
            } else {
                  addOnPriceDiv.textContent = '+$20/yr'
                  total = total + 20
            }

            addOnNameDiv.textContent = 'Customizable profile'
            addOnChildDiv.appendChild(addOnNameDiv);
            addOnChildDiv.appendChild(addOnPriceDiv);
            addOnMainDiv.appendChild(addOnChildDiv);
            step4PlanContainer.appendChild(addOnMainDiv);
      }

      const totalLabel = document.querySelector('.container__steps__step-item__step4__plan__total__label');
      const totalCost = document.querySelector('.container__steps__step-item__step4__plan__total__cost');

      if (monthly) {
            totalLabel.textContent = 'Total (per month)'
            totalCost.textContent = `+$${total}/mo`
      } else {
            totalLabel.textContent = 'Total (per year)'
            totalCost.textContent = `+$${total}/yr`
      }
}

const moveFrom4To3 = () => {
      pg4Count.classList.remove("active")
      pg3Count.classList.add("active")
      formPg3.classList.remove("disabled")
      formPg4.classList.add("disabled")
      PlanInfoDiv.innerHTML = '';

      if (document.contains(document.querySelector('.container__steps__step-item__step4__plan__addons'))) {
            const addOnDivToRemove = document.querySelector('.container__steps__step-item__step4__plan__addons');
            addOnDivToRemove.parentNode.removeChild(addOnDivToRemove);
      }
}

const moveFrom4To5 = () => {
      formPg4.classList.add("disabled")
      formPg5.classList.remove("disabled")
      document.getElementById("form").reset();
}

const moveFrom4To2 = () => {
      formPg4.classList.add("disabled")
      pg4Count.classList.remove("active")
      pg2Count.classList.add("active")
      formPg2.classList.remove("disabled")

      if (document.contains(document.querySelector('.container__steps__step-item__step4__plan__info'))) {
            const addOnDivToRemove = document.querySelector('.container__steps__step-item__step4__plan__info');
            addOnDivToRemove.parentNode.removeChild(addOnDivToRemove);
      }

      if (document.contains(document.querySelector('.container__steps__step-item__step4__plan__addons'))) {
            const addOnDivToRemove = document.querySelector('.container__steps__step-item__step4__plan__addons');
            addOnDivToRemove.parentNode.removeChild(addOnDivToRemove);
      }
}

const selectPlan = (e) => {
      switch (e.target.id) {
            case 'plan-arcade':
                  selectedPlan = 'Arcade';

                  planMonthlyPrice = planArcadeMonthlyFee;
                  planAnnualPrice = planArcadeYearlyFee;

                  planArcade.classList.add('selected');

                  if (Object.values(planAdvanced.classList).includes('selected')) {
                        planAdvanced.classList.remove('selected')
                  }
                  if (Object.values(planPro.classList).includes('selected')) {
                        planPro.classList.remove('selected')
                  }
                  if (!Object.values(page2error.classList).includes('disabled')) {
                        page2error.classList.add('disabled');
                  }
                  break;
            case 'plan-advanced':
                  selectedPlan = 'Advanced';
                  planMonthlyPrice = planAdvancedMonthlyFee;
                  planAnnualPrice = planAdvancedYearlyFee;
                  planAdvanced.classList.add('selected');

                  if (Object.values(planPro.classList).includes('selected')) {
                        planPro.classList.remove('selected')
                  }
                  if (Object.values(planArcade.classList).includes('selected')) {
                        planArcade.classList.remove('selected')
                  }
                  if (!Object.values(page2error.classList).includes('disabled')) {
                        page2error.classList.add('disabled');
                  }
                  break;
            case 'plan-pro':
                  selectedPlan = 'Pro';
                  planMonthlyPrice = planProMonthlyFee;
                  planAnnualPrice = planProYearlyFee;
                  planPro.classList.add('selected');

                  if (Object.values(planArcade.classList).includes('selected')) {
                        planArcade.classList.remove('selected')
                  }
                  if (Object.values(planAdvanced.classList).includes('selected')) {
                        planAdvanced.classList.remove('selected')
                  }
                  if (!Object.values(page2error.classList).includes('disabled')) {
                        page2error.classList.add('disabled');
                  }
                  break;
            default:
                  console.log(`Unknown plan - ${e.target.id} - selected on page 2.`)
      }
}

const togglePaymentSchedule = (e) => {
      monthly = !monthly

      if (monthly) {
            arcadeMonthlyPrice.classList.remove('disabled')
            advancedMonthlyPrice.classList.remove('disabled')
            proMonthlyPrice.classList.remove('disabled')
            arcadeYearlyPrice.classList.add('disabled')
            arcadeYearlyFree.classList.add('disabled')
            advancedYearlyPrice.classList.add('disabled')
            advancedYearlyFree.classList.add('disabled')
            proYearlyPrice.classList.add('disabled')
            proYearlyFree.classList.add('disabled')

            addOnMultiMonthly.classList.remove('disabled')
            addOnStorageMonthly.classList.remove('disabled')
            addOnPorfileMonthly.classList.remove('disabled')
            addOnMultiYearly.classList.add('disabled')
            addOnStorageYearly.classList.add('disabled')
            addOnProfileYearly.classList.add('disabled')
      } else {
            arcadeMonthlyPrice.classList.add('disabled')
            advancedMonthlyPrice.classList.add('disabled')
            proMonthlyPrice.classList.add('disabled')
            arcadeYearlyPrice.classList.remove('disabled')
            arcadeYearlyFree.classList.remove('disabled')
            advancedYearlyPrice.classList.remove('disabled')
            advancedYearlyFree.classList.remove('disabled')
            proYearlyPrice.classList.remove('disabled')
            proYearlyFree.classList.remove('disabled')

            addOnMultiMonthly.classList.add('disabled')
            addOnStorageMonthly.classList.add('disabled')
            addOnPorfileMonthly.classList.add('disabled')
            addOnMultiYearly.classList.remove('disabled')
            addOnStorageYearly.classList.remove('disabled')
            addOnProfileYearly.classList.remove('disabled')
      }
}

const selectOnlineService = (e) => {
      // console.log(e.target)
      if (e.target.checked) {
            onlineService.parentElement.classList.add('checked')
            onlineServiceAddOn = true;
      } else {
            onlineService.parentElement.classList.remove('checked')
            onlineServiceAddOn = false;
      }
};

const selectLargerStorage = (e) => {
      // console.log(e.target)
      if (e.target.checked) {
            largerStorage.parentElement.classList.add('checked')
            largerStorageAddOn = true;
      } else {
            largerStorage.parentElement.classList.remove('checked');
            largerStorageAddOn = false;
      }
}

const selectCustomizeProfile = (e) => {
      // console.log(e.target)
      if (e.target.checked) {
            customizeProfile.parentElement.classList.add('checked')
            customizeProfileAddOn = true;
      } else {
            customizeProfile.parentElement.classList.remove('checked')
            customizeProfileAddOn = false;
      }
}

pg1Next.addEventListener('click', moveFrom1To2);
pg2Next.addEventListener('click', moveFrom2To3);
pg3Next.addEventListener('click', moveFrom3To4);
pg4Next.addEventListener('click', moveFrom4To5);
pg2Back.addEventListener('click', moveFrom2To1);
pg3Back.addEventListener('click', moveFrom3To2);
pg4Back.addEventListener('click', moveFrom4To3)

planArcade.addEventListener('click', selectPlan);
planAdvanced.addEventListener('click', selectPlan);
planPro.addEventListener('click', selectPlan);

paymentSchedule.addEventListener('click', togglePaymentSchedule);

onlineService.addEventListener('click', selectOnlineService);
largerStorage.addEventListener('click', selectLargerStorage);
customizeProfile.addEventListener('click', selectCustomizeProfile);

changePlanHyperLink.addEventListener('click', moveFrom4To2);
nameInput.addEventListener('change', checkIfNameIsValid)
phoneInput.addEventListener('change', checkIfPhoneIsValid)
emailInput.addEventListener('change', checkIfEmailIsValid)