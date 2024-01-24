package models

import "gorm.io/gorm"

type Medicine struct {
	gorm.Model

	SL                int64          `json:"sl" gorm:"primaryKey"`
	Manufacturer_name string         `json:"manufacturer_name"`
	Brand_name        string         `json:"brand_name"`
	Price             int64          `json:"price"`
	Strength          string         `json:"strength"`
	Generic_name      string         `json:"generic_name"`
	Use_for           string         `json:"use_for"`
	DAR               string         `json:"dar"`
	DeletedAt         gorm.DeletedAt `json:"deleted_at" gorm:"index"`
}
