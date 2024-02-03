class Account::OtherLiability < ApplicationRecord
  include Accountable

  def icon
    "icon-bank-accounts.svg"
  end

  def type_name
    "Other Liability"
  end

  def color
    {
      background: "bg-[#EDF7F4]",
      text: "text-[#1BD5A1]"
    }
  end
end
