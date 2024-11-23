#!/bin/bash
# Set the date format for commits
start_date="2024-10-01"
end_date="2024-10-31"
current_date="$start_date"

# Convert start and end dates to seconds since epoch for comparison
start_date_sec=$(date -j -f "%Y-%m-%d" "$start_date" +%s)
end_date_sec=$(date -j -f "%Y-%m-%d" "$end_date" +%s)

# Loop through the days in October
while [[ "$start_date_sec" -le "$end_date_sec" ]]; do
  # Set the commit date to the current date
  GIT_AUTHOR_DATE="$(date -r "$start_date_sec" +"%Y-%m-%d %H:%M:%S")" GIT_COMMITTER_DATE="$(date -r "$start_date_sec" +"%Y-%m-%d %H:%M:%S")" git commit --allow-empty -m "Daily commit for $(date -r "$start_date_sec" +"%Y-%m-%d")"
  
  # Increment the current date by 1 day (in seconds)
  start_date_sec=$((start_date_sec + 86400)) # 86400 seconds in a day
done
