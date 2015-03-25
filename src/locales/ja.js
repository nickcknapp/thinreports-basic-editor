//  Copyright (C) 2012 Matsukei Co.,Ltd.
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.

App.addLocale({
  id: 'ja', name: '日本語', font_family: "'Helvetica Neue', 'Meiryo UI', Arial",
  default_settings: {
    // Available values: break-word, none
    text_word_wrap: 'none'
  },
  messages: {
    toolbar_group_file: 'ファイル',
    toolbar_group_edit: '編集',
    toolbar_group_view: '表示',
    toolbar_group_font: 'フォント',
    toolbar_group_position: '配置',

    property_group_basis: '基本',
    property_group_shape: '図形',
    property_group_association: '連携',
    property_group_font: 'フォント',
    property_group_text: 'テキスト',
    property_group_simple_format: '簡易書式',
    property_group_position: '配置',
    property_group_list: '一覧表',
    property_group_list_header: 'ヘッダー',
    property_group_list_detail: '詳細',
    property_group_list_footer: 'フッター',
    property_group_list_page_footer: 'ページフッター',
    property_group_image: '画像位置',
    property_group_pageno: 'ページ番号',
    property_group_background_image: '背景画像',

    label_title_setting: 'タイトル設定',
    label_page_setting: '用紙設定',
    label_margin_setting: '余白設定',
    label_direction_landscape: '横',
    label_direction_portrait: '縦',
    label_text_edit: 'テキスト編集',
    label_new_report: '新しいレポート',
    label_report_setting: 'レポート設定',
    label_specify_zoom_rate: '指定',
    label_solid_line: '実線',
    label_dotted_line: '点線',
    label_dashed_line: '破線',
    label_left_align: '左揃え',
    label_center_align: '中央揃え',
    label_right_align: '右揃え',
    label_top_align: '上揃え',
    label_middle_align: '中央揃',
    label_bottom_align: '下揃え',
    label_word_wrap_none: '領域に合わせる',
    label_word_wrap_break_word: '単語単位',
    label_overflow_truncate: '非表示',
    label_overflow_fit: '縮小',
    label_overflow_expand: '拡張',
    label_datetime_format: '日付時刻書式',
    label_number_format: '数値書式',
    label_character_fill_format: '字詰め書式',
    label_fill_left: '左詰め',
    label_fill_right: '右詰め',
    label_left_position: '左',
    label_center_position: '中央',
    label_right_position: '右',
    label_top_position: '上',
    label_middle_position: '中央',
    label_bottom_position: '下',
    label_color_none: 'なし',
    label_save_file: 'ファイルを保存',
    label_open_file: 'ファイルを開く',
    label_open_image: '画像を開く',
    label_confirmation: '確認',
    label_condition_and: 'かつ',
    label_preference: '環境設定',

    label_format: '書式',
    label_format_basic: '基本',
    label_format_type: '種別',
    label_format_value: '値',
    label_shape_type: '種別',
    label_layout: 'レイアウト',
    label_shapes: 'オブジェクト',
    label_export_layout_definition: 'レイアウト定義をエクスポート',

    field_page_title: 'ページタイトル',
    field_paper_type: '用紙',
    field_paper_width: '幅',
    field_paper_height: '高さ',
    field_paper_direction: '用紙の向き',
    field_margin_top: '上余白',
    field_margin_bottom: '下余白',
    field_margin_left: '左余白',
    field_margin_right: '右余白',
    field_left_position: '左位置',
    field_top_position: '上位置',
    field_width: '幅',
    field_height: '高さ',
    field_display: '表示',
    field_text_content: 'テキスト（1行目）',
    field_fill_color: '塗り',
    field_stroke_color: '線の色',
    field_stroke_width: '線の幅',
    field_stroke_type: '線の種類',
    field_corner_radius: '角丸',
    field_description: '説明',
    field_reference_id: '参照ID',
    field_default_value: '初期値',
    field_font_color: '色',
    field_font_size: 'サイズ',
    field_font_family: 'フォント',
    field_text_align: '横位置',
    field_text_vertical_align: '縦位置',
    field_text_word_wrap: '折り返し',
    field_text_line_height: '行間',
    field_text_kerning: '文字間隔',
    field_multiple_line: '複数行',
    field_text_overflow: '溢れたとき',
    field_format_type: '書式種別',
    field_datetime_format: '日付時刻書式',
    field_delimiter: '桁区切り',
    field_decimal_place: '小数点',
    field_fill_length: '長さ',
    field_fill_character: '文字',
    field_fill_direction: '方向',
    field_basic_format: '基本書式',
    field_horizontal_position: '横位置',
    field_vertical_position: '縦位置',
    field_auto_page_break: '自動改ページ',
    field_list_header: 'ヘッダー',
    field_list_page_footer: 'ページフッター',
    field_list_footer: 'フッター',
    field_position: '位置',
    field_language: '言語',
    field_default_unit: 'デフォルト単位',
    field_pageno_format: '書式',
    field_counted_page_target: 'カウント対象',
    field_default_counted_page_target: 'レポート',
    field_background_image: '背景にする',
    field_inline_format: 'インライン書式の許可',

    button_new_report: '新規作成',
    button_save: '保存',
    button_saveas: '名前を付けて保存',
    button_export_definition: 'レイアウト定義をエクスポート',
    button_open: '開く',
    button_undo: '元に戻す',
    button_redo: 'やり直す',
    button_page_setting: 'ページ設定',
    button_zoom_in: '拡大',
    button_zoom_out: '縮小',
    button_grid: 'グリッド',
    button_guide: 'ガイド',
    button_add_horizontal_guide: 'ガイドラインの追加（水平）',
    button_add_vertical_guide: 'ガイドラインの追加（垂直）',
    button_remove_guide: 'ガイドラインの削除',
    button_edit_text: 'テキスト編集',
    button_align: '整列',
    button_align_left: '左揃え',
    button_align_center: '中央揃え',
    button_align_right: '右揃え',
    button_align_top: '上揃え',
    button_align_middle: '上下中央揃え',
    button_align_bottom: '下揃え',
    button_fit_same_width: '幅揃え',
    button_fit_same_height: '高さ揃え',
    button_fit_same_size: 'サイズ揃え',
    button_bring_forward: '前面へ移動',
    button_bring_to_front: '最前面へ移動',
    button_send_backward: '背面へ移動',
    button_send_to_back: '最背面へ移動',
    button_help: 'ヘルプ',
    button_preference: '設定',
    button_about: 'Thinreportsについて',
    button_go_to_forum: 'ディスカッション',
    button_feedback: '問題の報告',
    button_translation: '翻訳に協力する',
    button_selection_tool: '選択ツール',
    button_zoom_tool: '拡大縮小ツール',
    button_rectangle_tool: '四角形ツール',
    button_ellipse_tool: '楕円形ツール',
    button_line_tool: '線形ツール',
    button_text_tool: 'テキストツール',
    button_image_tool: '画像ツール',
    button_text_block_tool: 'テキストブロックツール',
    button_image_block_tool: '画像ブロックツール',
    button_page_number_tool: 'ページ番号ツール',
    button_list_tool: '一覧表ツール',

    error_id_is_already_used: '{$id} は既に使用されています。',
    error_invalid_value: '値が正しくありません。',
    error_id_contains_invalid_characters: 'IDに使用できる文字は、英数字とアンダースコア_のみです。',
    error_id_is_required: 'IDは必須です。',
    error_id_not_found: '{$id} は存在しません。',
    error_id_is_not_textblock: '{$id} はテキストブロックではありません。',
    error_id_is_not_list: '{$id} はリストではありません。',
    error_can_not_specify_myself: '自身は指定できません。',
    error_id_already_has_reference: '{$id} は参照先を持っているため、指定できません。',
    error_can_not_set_the_reference: '他のテキストブロックから参照されているため、参照先を設定することはできません。',
    error_can_not_save: '保存できませんでした。',
    error_paper_size_is_empty: '用紙サイズが未入力です。',
    error_can_not_edit_layout_file: 'このレイアウトファイルは、互換性が無いため編集することができません。\n\n編集可能なバージョン: {$required}\nレイアウトファイルのバージョン: {$version}',
    error_unknown: '予期しないエラーが発生しました。',
    error_invalid_layout_file: 'レイアウトファイルの内容に異常が検出されたため開くことができません。',
    error_failed_to_load_image: '画像ファイルの読み込みに失敗しました。',
    error_no_valid_placeholder_included: '有効なプレースホルダが一つも含まれていません。',
    error_unexpected_error: '予期しないエラーが発生しました。',
    notice_no_shapes: 'オブジェクトはありません',
    warning_discard_changes: '保存していないレイアウトがある場合は必ず保存して下さい。',
    warning_discard_changes_en: 'If you have unsaved files, the changes will be discarded. Please be sure to save.',

    text_editor_force_close_confirmation: '保存されていないファイルがあります。\n保存しますか？',
    text_layout_force_close_confirmation: '内容が変更されています。\n保存しますか？',
    text_change_unit: '単位 {$unit} へ切り替える',
    text_apply_locale_setting: '設定を反映するにはエディタの再読み込みが必要です。\n今すぐ設定を反映しますか？',
    text_layout_force_edit_confirmation: 'このレイアウトは新しいバージョンのエディタで作成されているため、\n編集すると一部の設定情報が消失する可能性があります。\nそれでも開きますか？',
    text_placeholder_of_pageno_description: '[利用可能なプレースホルダ] {page}:ページ番号, {total}:総ページ数',
    text_counted_page_target_description: '[指定可能な対象] リスト（対象リストID） or レポート（空）',
    text_feedback_in_project_site: 'プロジェクトサイトへ',
    text_feedback_in_github: 'GitHub Issues へ',
    text_please_feedback: '下記サイトより問題の報告をお願いします。また、問題が発生した状況をできるだけ詳しく教えて下さい。',
    text_unsaved_layout_exists_confirmation: '未保存と思われるファイルが存在します。復元しますか？',

    shape_rectangle: '四角形',
    shape_ellipse: '楕円形',
    shape_line: '線形',
    shape_text: 'テキスト',
    shape_image: '画像',

    font_gothic: 'ゴシック',
    font_mincho: '明朝'
  }
});
