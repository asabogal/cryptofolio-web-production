class Coin < ApplicationRecord
  belongs_to :user, optional: :true

  validates :name, presence: true
  validates :symbol, presence: true
end
