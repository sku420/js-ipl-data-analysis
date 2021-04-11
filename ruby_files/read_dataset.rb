# frozen_string_literal: true

require 'csv'
require 'json'

# read dataset from .csv file and returns hash
def read_dataset(file_name)
  CSV.parse(File.read("./datasets/#{file_name}.csv"), headers: true)
end

def create_json(hash_name, file_name)
  content = hash_name.to_json
  File.write("../jsonFiles/#{file_name}.json", content)
end
