export const deliveryOptions=[
  {
    id:1,
    deliveryDay:7,
    deliveryPrice:0

  },
  {
    id:2,
    deliveryDay:3,
    deliveryPrice:499

  },
  {
    id:3,
    deliveryDay:1,
    deliveryPrice:999

  }
]

export function getDeliveryOptions(deliveryOptionId){
  let deliveryOption='';
  deliveryOptions.forEach((option)=>{
    if(option.id == deliveryOptionId){
      deliveryOption=option;
    }
  });
  return deliveryOption;
}