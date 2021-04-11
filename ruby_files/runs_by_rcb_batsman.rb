# frozen_string_literal: true

require_relative 'read_dataset'

# main method
def rcb_batsman_main
  # read dataset from .csv file
  deliveries_dataset = read_dataset('deliveries')

  # hash to store rcb batsmans and their scores
  rcb_batsman = Hash.new(0)

  # extracting required data from dataset: [batsman] => runs
  deliveries_dataset.each do |team|
    rcb_batsman[team['batsman']] += team['batsman_runs'].to_i if team['batting_team'] == 'Royal Challengers Bangalore'
  end
  # puts rcb_batsman, rcb_batsman.length

  # getting top 10 batsman from the extracted data
  top10 = rcb_batsman.sort_by { |_key, value| -value }[0..9].to_h

  # hash => json
  create_json(top10, 'runs_by_rcb_batsman')
end
